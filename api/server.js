const express = require("express");
const compression = require("compression");
const cors = require("cors");
const app = express();
const env = require("./env.js");
const models = require("./db/models");
const taskController = require("./db/controllers").task;
const pino = require("pino");
// const routes = require("./routes");

app.use(cors());
app.use(pino);

app.get("/", function (req, res) {});

app.post("/api/tasks", (req, res) => {
  taskController
    .list(req.params.limit)
    .then((posts) => res.status(200).json(posts.rows))
    .catch((e) => console.error(e));
});

app.post("/api/pocket/fetchAll", (req, res) => {
  userController.findOrCreate().then(() => taskController.list());
});

app.use(express.static("dist"), (res, req, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Enable gzip compression
app.use(compression());

// Launch app to listen to specified port
models.sequelize.sync().then(() => {
  app.listen(env.server.development.port, function () {
    console.log(" --- Running Vock on port " + env.server.development.port);
  });
});
