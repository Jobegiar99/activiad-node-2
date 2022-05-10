const sql = require("./db.js");

const Category = function(category) {

    this.id_category = category.id_category;
    this.id_parent = category.id_parent;
    this.id_shop_default = category.id_shop_default;
    this.level_depth = category.level_depth;
    this.active = category.active;
    this.date_add = category.date_add;
    this.date_upd = category.date_upd;

};

Category.getAll =(result) => {

    let query = "SELECT * FROM category";
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("categories: ", res);
      result(null, res);
    });

};

module.exports = Category;


