// var request = require("request");
// var request = require("request");
// const env = require("../../../env");
// const pocket = require("../helpers/pocket");
// var params = {
//   consumer_key: env.getpocket.consumer_key,
//   access_token: db.getToken(env.getpocket.username),
//   detailType: "complete",
//   count: 8000,
// };

// const fetchAll = () => {
//   pocket.refreshConfig(params);
//   pocket.get(params, function (err, resp) {
//     for (var article_id in resp.list) {
//       db.addPost(resp.list[article_id]);
//     }
//   });
//   // fetchAll(req, res) {
//   //   //Get token
//   //   return Pocket.findAll({
//   //     username: env.getpocket.username,
//   //   });
//   // },
//   const result = "ciao";
//   return result;
//   // return new Promise(function (resolve, reject) {
//   //   if (!env.getpocket.redirect_uri) {
//   //     callback(
//   //       new Error("400 Bad Request - missing params.redirect_uri"),
//   //       null,
//   //       null
//   //     );
//   //     return false;
//   //   }
//   //   const options = {};
//   //   options.redirect_uri = env.getpocket.redirect_uri;
//   //   options.consumer_key = env.getpocket.consumer_key;
//   //   var url = ROOT_URL + OAUTH_REQUEST_URL;
//   //   var opts = {
//   //     uri: url,
//   //     headers: this.headers,
//   //     body: JSON.stringify(options),
//   //   };
//   //   request.post(opts);
//   // }).then(function () {
//   //   result = "ciao";
//   // });
//   // .then(
//   //   Pocket.findAll()
//   //     .then((posts) => res.status(200).send(posts))
//   //     .catch((error) => {
//   //       res.status(400).send(error);
//   //     })
//   // );
// };

// module.exports = {
//   fetchAll,
// };
// // refreshConfig(config) {
// //   this.config = config;
// // },
// // getAuthorizeURL(params) {
// //   return (
// //     ROOT_URL +
// //     OAUTH_TOKEN_URL +
// //     "?request_token=" +
// //     params.request_token +
// //     "&redirect_uri=" +
// //     params.redirect_uri
// //   );
// // },
// // getAccessToken(params, callback) {
// //   if (!params.request_token) {
// //     callback(
// //       new Error("400 Bad Request - missing params.request_token"),
// //       null,
// //       null
// //     );
// //     return false;
// //   }

// //   var options = params;
// //   options.consumer_key = this.config.consumer_key;
// //   options.code = params.request_token;
// //   var url = ROOT_URL + OAUTH_ACCESS_URL;
// //   var opts = {
// //     uri: url,
// //     headers: this.headers,
// //     body: JSON.stringify(options),
// //   };
// //   return request.post(opts, callback);
// // },
// // add(params, callback) {
// //   if (!params.url) {
// //     callback(new Error("400 Bad Request - missing params.url"), null);
// //     return false;
// //   }

// //   var options = params;
// //   options.consumer_key = this.config.consumer_key;
// //   options.access_token = this.config.access_token;
// //   var url = ROOT_URL + ADD_URL;
// //   var opts = {
// //     uri: url,
// //     headers: this.headers,
// //     body: JSON.stringify(options),
// //   };

// //   var self = this;
// //   request.post(opts, function (error, response, body) {
// //     self._callbackHandler(error, response, body, callback);
// //   });
// // },
// // send(params, callback) {
// //   if (!params.actions) {
// //     callback(
// //       new Error("400 Bad Request - missing params.actions"),
// //       null,
// //       null
// //     );
// //     return false;
// //   }

// //   var options = params;
// //   options.consumer_key = this.config.consumer_key;
// //   options.access_token = this.config.access_token;
// //   var url = ROOT_URL + SEND_URL;
// //   var opts = {
// //     uri: url,
// //     headers: this.headers,
// //     body: JSON.stringify(options),
// //   };

// //   var self = this;
// //   request.post(opts, function (error, response, body) {
// //     self._callbackHandler(error, response, body, callback);
// //   });
// // },
// // get(params, callback) {
// //   var options = params || {};
// //   options.consumer_key = this.config.consumer_key;
// //   options.access_token = this.config.access_token;
// //   var url = ROOT_URL + GET_URL;

// //   var opts = {
// //     uri: url,
// //     headers: this.headers,
// //     body: JSON.stringify(options),
// //   };

// //   var self = this;
// //   request.post(opts, function (error, response, body) {
// //     self._callbackHandler(error, response, body, callback);
// //   });
// // },
// // archive(params, callback) {
// //   var isSingleItem = !Array.isArray(params);
// //   if (!params || (isSingleItem && !params.item_id)) {
// //     callback(
// //       new Error("400 Bad Request - missing params.item_id"),
// //       null,
// //       null
// //     );
// //     return false;
// //   }

// //   if (isSingleItem) params = [params];

// //   var timestamp = new Date().getTime();
// //   var actions = params.map(function (item) {
// //     if (item.item_id) {
// //       return {
// //         action: "archive",
// //         item_id: item.item_id,
// //         time: timestamp,
// //       };
// //     }
// //   });
// //   if (params.length !== actions.length) {
// //     callback(
// //       new Error("400 Bad Request - missing some params.item_id"),
// //       null,
// //       null
// //     );
// //     return false;
// //   }
// //   var options = {
// //     actions: actions,
// //   };
// //   this.send(options, callback);
// // },
// // delete(params, callback) {
// //   var isSingleItem = !Array.isArray(params);
// //   if (!params || (isSingleItem && !params.item_id)) {
// //     callback(
// //       new Error("400 Bad Request - missing params.item_id"),
// //       null,
// //       null
// //     );
// //     return false;
// //   }

// //   if (isSingleItem) params = [params];

// //   var timestamp = new Date().getTime();
// //   var actions = params.map(function (item) {
// //     if (item.item_id) {
// //       return {
// //         action: "delete",
// //         item_id: item.item_id,
// //         time: timestamp,
// //       };
// //     }
// //   });
// //   if (params.length !== actions.length) {
// //     callback(
// //       new Error("400 Bad Request - missing some params.item_id"),
// //       null,
// //       null
// //     );
// //     return false;
// //   }
// //   var options = {
// //     actions: actions,
// //   };
// //   this.send(options, callback);
// // },
// // _callbackHandler(error, response, body, callback) {
// //   if (error) {
// //     callback(error, undefined);
// //   } else if (response.statusCode !== 200) {
// //     callback(new Error(response.statusCode), undefined);
// //   } else {
// //     try {
// //       var payload = JSON.parse(body);
// //       callback(undefined, payload);
// //     } catch (e) {
// //       callback(
// //         new Error(
// //           "Could not interpret response from getpocket.com as JSON. Sorry " +
// //             e
// //         ),
// //         undefined
// //       );
// //     }
// //   }
// // },
// // };

// // module.exports = {
// //   list(req, res) {
// //     return Post.findAll({
// //       include: [
// //         {
// //           model: TodoItem,
// //           as: "todoItems",
// //         },
// //       ],
// //       order: [
// //         ["createdAt", "DESC"],
// //         [{ model: TodoItem, as: "todoItems" }, "createdAt", "ASC"],
// //       ],
// //     })
// //       .then((todos) => res.status(200).send(todos))
// //       .catch((error) => res.status(400).send(error));
// //   },

// //   retrieve(req, res) {
// //     return Post.findById(req.params.todoId, {
// //       include: [
// //         {
// //           model: TodoItem,
// //           as: "todoItems",
// //         },
// //       ],
// //     })
// //       .then((post) => {
// //         if (!todo) {
// //           return res.status(404).send({
// //             message: "Todo Not Found",
// //           });
// //         }
// //         return res.status(200).send(post);
// //       })
// //       .catch((error) => res.status(400).send(error));
// //   },

// //   update(req, res) {
// //     return Post.findById(req.params.todoId, {
// //       include: [
// //         {
// //           model: TodoItem,
// //           as: "todoItems",
// //         },
// //       ],
// //     })
// //       .then((post) => {
// //         if (!todo) {
// //           return res.status(404).send({
// //             message: "Todo Not Found",
// //           });
// //         }
// //         return todo
// //           .update({
// //             title: req.body.title || Post.title,
// //           })
// //           .then(() => res.status(200).send(post))
// //           .catch((error) => res.status(400).send(error));
// //       })
// //       .catch((error) => res.status(400).send(error));
// //   },

// //   destroy(req, res) {
// //     return Post.findById(req.params.todoId)
// //       .then((post) => {
// //         if (!todo) {
// //           return res.status(400).send({
// //             message: "Todo Not Found",
// //           });
// //         }
// //         return todo
// //           .destroy()
// //           .then(() => res.status(204).send())
// //           .catch((error) => res.status(400).send(error));
// //       })
// //       .catch((error) => res.status(400).send(error));
// //   },
// // };
// // ----------------------------------
// // var params = {
// //   redirect_uri: config.redirect_uri,
// // };

// // app.locals.res = res;

// // pocket.getRequestToken(params, function (err, resp, body) {
// //   if (err) {
// //     console.log("Failed to get request token: " + err);
// //     app.locals.res.send("<p>" + "Failed to get request token: " + err + "</p>");
// //   } else if (resp.statusCode !== 200) {
// //     app.locals.res.send(
// //       "<p>Oops, Pocket said " +
// //         resp.headers.status +
// //         ", " +
// //         resp.headers["x-error"] +
// //         "</p>"
// //     );
// //   } else {
// //     var json = JSON.parse(body);
// //     config.request_token = json.code;
// //     console.log("Received request token: " + config.request_token);

// //     var url = pocket.getAuthorizeURL(config);
// //     console.log("Redirecting to " + url + " for authentication");
// //     app.locals.res.redirect(url);
// //   }
// // });

// // findAll: async (entity, conditions, fields) => {
// //   if (!entity) throw new Error("no entity table specified");
// //   if (Utils.isObjEmpty(conditions))
// //     throw new Error("no conditions specified");
// //   let resp;
// //   const { text, values } = update(entity, conditions, fields);
// //   try {
// //     rs = await pool.query(text, values);
// //     resp = rs.rows[0];
// //   } catch (err) {
// //     console.error(err);
// //     throw err;
// //   }
// //   return resp;
// // },
