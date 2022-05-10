//segui el tutorial de:  https://www.bezkoder.com/node-js-rest-api-express-mysql/
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Servidor de Bernardo." });
});
require("./app/routes/category.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
