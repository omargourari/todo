"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Todos",
      [
        {
          createdAt: new Date(
            +new Date() - Math.floor(Math.random() * 10000000000)
          ),
          id: 1,
          updatedAt: new Date(
            +new Date() - Math.floor(Math.random() * 10000000000)
          ),
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          createdAt: new Date(
            +new Date() - Math.floor(Math.random() * 10000000000)
          ), // current date
          id: 2,
          updatedAt: new Date(
            +new Date() - Math.floor(Math.random() * 10000000000)
          ),
          title:
            " dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
        },
        {
          createdAt: new Date(
            +new Date() - Math.floor(Math.random() * 10000000000)
          ), // current date
          id: 3,
          updatedAt: new Date(
            +new Date() - Math.floor(Math.random() * 10000000000)
          ),
          title: "ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Todos", null, {});
  },
};
