const Category = require("../models/category.model");

exports.findAll = (req, res) => {
    
    Category.getAll( ( err , data ) => 
    {
        if(err)
             res.status(500).send({
                message:
                    err.message || "No se pudo obtener la info"
            });
        else
            res.send(data);
    })
}