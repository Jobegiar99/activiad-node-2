module.exports = (app) => {
    const categories = require("../controller/category.controller.js");
    var router = require("express").Router();
    // Retrieve all Tutorials
    router.get("/", categories.findAll);
    app.use("/api/eshop",router);
  };
  