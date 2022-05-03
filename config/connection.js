require("dotenv").config();

//imports the Sequelize constructor from the library
const Sequelize = require("sequelize");

//// create connection to our databasee
const sequelize = new Sequelize(ecommerce_db,username,process.env.DB_PW)
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       host: "localhod",
//       dialect: "mysql",
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });

module.exports = sequelize;
