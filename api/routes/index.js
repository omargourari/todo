const todosController = require("../controllers").todos;

module.exports = (app) => {
  app.post("/api/todo/:title", todosController.create);
  app.get("/api/todo/:id", todosController.retrieve);
  app.delete("/api/todo/:id", todosController.destroy);
  app.get("/api/todos", todosController.list);
  // app.get("/api", (req, res) =>
  //   res.status(200).send({
  //     message: "Welcome to the Todos API!",
  //   })
  // );
  // app.put("/api/todos/:todoId", todosController.update);
  // app.post("/api/todos/:todoId/items", todoItemsController.create);
  // app.put("/api/todos/:todoId/items/:todoItemId", todoItemsController.update);
  // app.delete(
  //   "/api/todos/:todoId/items/:todoItemId",
  //   todoItemsController.destroy
  // );
  // app.all("/api/todos/:todoId/items", (req, res) =>
  //   res.status(405).send({
  //     message: "Method Not Allowed",
  //   })
  // );
};
