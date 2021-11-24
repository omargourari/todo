const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

// Connect to the database with a Sequelize instance
const sequelize = new Sequelize({
  database: config.database,
  dialect: config.dialect,
  host: config.host,
  // logging: (...msg) => console.log(msg),
  password: config.password,
  port: config.port,
  username: config.username,
  pool: config.pool,
});

// Automatically import model files
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
