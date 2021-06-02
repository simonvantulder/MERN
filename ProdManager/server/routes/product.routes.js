const ProductController = require('../controllers/product.controllers') //controller.method (method in controller file)

module.exports = app => {

    app.get("/api", ProductController.index);
    app.get("/api/products", ProductController.findAllProducts);
    app.get("/api/products/random", ProductController.findOneRandomProduct);
    app.get("/api/products/:id", ProductController.findOneProduct);
    app.post("/api/products/new", ProductController.createNewProduct);
    app.put("/api/products/update/:id", ProductController.updateExistingProduct);
    app.delete("/api/products/delete/:id", ProductController.deleteAnExistingProduct);
};