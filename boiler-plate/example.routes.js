const exampleController = require("../controllers/example.controller");

module.exports = (app) => {
  app.post("/api/examples", exampleController.create);
  app.get("/api/examples", exampleController.getAll);
  app.get("/api/examples/:id", exampleController.getOne);
  app.delete("/api/examples/:id", exampleController.delete);
  app.put("/api/examples/:id", exampleController.update);
};
