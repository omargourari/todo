const Todo = require("../models").Todo;

module.exports = {
  create(req, res) {
    return Todo.create({
      title: req.params.title,
      createdAt: req.params.createdAt,
      updateddAt: req.params.updatedAt,
    })
      .then((todo) => res.status(201).send(todo))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return Todo.findAll({
      order: [["createdAt", "DESC"]],
    })
      .then((todos) => res.status(200).send(todos))
      .catch((error) => res.status(500).send(error));
  },

  retrieve(req, res) {
    return Todo.findByPk(req.params.id)
      .then((todo) => {
        if (!todo) {
          return res.status(404).send({
            message: "Todo Not Found",
          });
        }
        return res.status(200).send(todo.dataValues);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Todo.findByPk(req.params.todoId, {
      include: [
        {
          model: TodoItem,
          as: "todoItems",
        },
      ],
    })
      .then((todo) => {
        if (!todo) {
          return res.status(404).send({
            message: "Todo Not Found",
          });
        }
        return todo
          .update({
            title: req.body.title || todo.title,
          })
          .then(() => res.status(200).send(todo))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Todo.findByPk(req.params.id)
      .then((todo) => {
        if (!todo) {
          return res.status(400).send({
            message: "Todo Not Found",
          });
        }
        return todo
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
