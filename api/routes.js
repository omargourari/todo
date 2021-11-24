var router = require("express").Router();
const postController = require("./db/controllers").post;
const pocketController = require("./db/controllers").pocket;
const env = require("../env.js");
const GetPocket = require("./db/helpers/pocket");

var config = {
  consumer_key: env.getpocket.consumer_key,
  request_token: "",
  access_token: "",
  user_name: "",
  redirect_uri: "http://localhost:7070/dashboard",
};

const pocket = new GetPocket(config);

module.exports = (app) => {
  // Pocket routes
  app.post("/api/pocket/fetchAll", (req, res) => {
    var params = {
      consumer_key: env.getpocket.consumer_key,
      access_token: db.getToken(env.getpocket.username),
      detailType: "complete",
      count: 8000,
    };

    pocket.refreshConfig(params);
    pocket.get(params, function (err, resp) {
      for (var article_id in resp.list) {
        postController.create(resp.list[article_id]);
      }
    });

    res.on("error", (err) => {
      console.log("Error getting tags:", err);
    });

    res.send("ciao");
  });
  // Post routes
  app.post("/api/posts", postController.list());
  //General endpoints
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Vock API!",
    })
  );
  app.get("/api/post/:postId", (req, res) =>
    res.status(405).send({
      message: "Method Not Allowed",
    })
  );
};
