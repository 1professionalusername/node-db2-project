// Here we create an instance of knex thats connected to the database that we can use so we can run sql commands

const knex = require("knex");

// we must select the development object from our knexfile
const config = require("../knexfile").development;

// export for use in codebase
module.exports = knex(config);