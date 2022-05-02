require("dotenv").config();

const sequelize = require("sequelize");

const sequelize = process.env.JAWSDB_URL
  ? new sequelize(process.env.JAWSDB_URL)
  : new sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "localhost",
      dialect: "mysql",
      port: 3301,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
