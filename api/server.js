const express = require("express");
const compression = require("compression");
const cors = require("cors");
const app = express();
const env = require("../env.js");
const models = require("./db/models");
const postController = require("./db/controllers").post;
const userController = require("./db/controllers").user;
const pino = require("pino");
// const routes = require("./routes");
// const pocketController = require("./db/controllers").pocket;

app.use(cors());
app.use(pino);

app.get("/", function (req, res) {
  var params = {
    redirect_uri: env.getpocket.redirect_uri,
  };
  app.locals.res = res;
  pocket.getRequestToken(params, function (err, resp, body) {
    if (err) {
      console.log("Failed to get request token: " + err);
      app.locals.res.send(
        "<p>" + "Failed to get request token: " + err + "</p>"
      );
    } else if (resp.statusCode !== 200) {
      app.locals.res.send(
        "<p>Oops, Pocket said " +
          resp.headers.status +
          ", " +
          resp.headers["x-error"] +
          "</p>"
      );
    } else {
      var json = JSON.parse(body);
      config.request_token = json.code;
      console.log("Received request token: " + config.request_token);
      var url = pocket.getAuthorizeURL(config);
      console.log("Redirecting to " + url + " for authentication");
      app.locals.res.redirect(url);
    }
  });
});

app.get("/dashboard", function (req, res) {
  app.locals.res = res;
  var params = {
    request_token: config.request_token,
  };

  pocket.getAccessToken(params, function access_token_handler(err, resp, body) {
    if (err) {
      console.log("Failed to get access token: " + err);
      app.locals.res.send(
        "<p>" + "Failed to get access token: " + err + "</p>"
      );
    } else if (resp.statusCode !== 200) {
      app.locals.res.send(
        "<p>Oops, Pocket said " +
          resp.headers.status +
          ", " +
          resp.headers["x-error"] +
          "</p>"
      );
    } else {
      var json = JSON.parse(body);
      db.addUser(json);
    }
  });
});

app.post("/api/posts", (req, res) => {
  postController
    .list(req.params.limit)
    .then((posts) => res.status(200).json(posts.rows))
    .catch((e) => console.error(e));
});

app.post("/api/pocket/fetchAll", (req, res) => {
  userController.findOrCreate().then(() => postController.list());
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
    console.log("Running Vock on port " + env.server.development.port);
  });
});
