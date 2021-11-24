const stage = process.env.NODE_ENV || "development";
const env = require("../../../env")["server"];

const config = {
  development: {
    database: env.development.db.name,
    dialect: env.development.db.dialect,
    host: env.development.db.hostname,
    password: env.development.db.password,
    pool: env.development.db.pool,
    port: env.development.db.port,
    username: env.development.db.username,
  },
  production: {
    database: env.production.db.name,
    dialect: env.development.db.dialect,
    host: env.production.db.hostname,
    password: env.production.db.password,
    username: env.production.db.username,
  },
};

module.exports = config;
