const User = require("../models").User;
const env = require("../../../env");

module.exports = {
  findOrCreate: function (req, res) {
    return User.findOrCreate({
      where: {
        username: env.getpocket.username,
      },
      logging: (sql) => logger.info(sql),
    })
      .then((token) => res.status(201).send(token))
      .catch((error) => res.status(400).send(error));
  },

  retrieve: function (req, res) {
    return User.findById(req.params.todoId, {
      include: [
        {
          model: TodoItem,
          as: "todoItems",
        },
      ],
    })
      .then((post) => {
        if (!post) {
          return res.status(404).send({
            message: "Post Not Found",
          });
        }
        return res.status(200).send(post);
      })
      .catch((error) => res.status(400).send(error));
  },
};
