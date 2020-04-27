// Config object
// Generated in the command line with *npx knex init*
// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3', // specifying the DBMS
    connection: {
      filename: './data/car-dealer.db3' // location of our database file
    },
    useNullAsDefault: true, // a flag required for sqlite to work properly with null values
  },

};
