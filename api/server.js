const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const express = require("express");
// const helmet = require("helmet");

const app = express();
const env = require("./env.js");
const models = require("./models");

// Enable gzip compression
app.use(compression());
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("dist"), (res, req, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// if (NODE_ENV !== "production") {}
app.use(cors());

// app.use(helmet());

require("./routes")(app);
// Launch app to listen to specified port
models.sequelize.sync().then(() => {
  app.listen(env.server.development.port, function () {
    console.log(" --- Running Vock on port " + env.server.development.port);
  });
});
