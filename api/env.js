const env = {
  manifest: {
    background: "#ffffff",
    color: "#ff0000",
    name: "todo",
    url: "http://localhost:8082",
  },
  server: {
    development: {
      app_url: "http://localhost:7070",
      host: "http://localhost:",
      port: 7070,
      db: {
        name: "tododb",
        dialect: "postgresql",
        hostname: "localhost",
        password: "DnT2L5lcg*6$EA@3kNw^7YtCA9qI",
        port: "5432",
        pool: {
          acquire: 60000,
          idle: 30000,
          max: 5,
          min: 0,
        },
        username: "todouser",
      },
    },
    production: {
      db: {
        name: "",
        dialect: "postgresql",
        hostname: "",
        password: "",
        port: "",
        pool: {
          acquire: 60000,
          idle: 30000,
          max: 5,
          min: 0,
        },
        username: "",
      },
    },
  },
};

module.exports = env;
