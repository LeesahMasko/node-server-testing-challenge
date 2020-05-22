const knex = require("knex");

// const knexfile = require("../knexfile.js");

const config = require("../knexfile.js");

const environment = process.env.DB_ENV || "development";

module.exports = knex(config[environment]);
