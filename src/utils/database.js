const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize({
  host: "dpg-cicvm9tiuie2ea1ia6k0-a.oregon-postgres.render.com",
  port: 5432,
  database: "db_boda_prueba",
  username: "roayalaca",
  password: "Mo9xYj0q59RLW9B0bHJLe59gTBbOitHs",
  dialect: "postgres",
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
});

module.exports = db;
