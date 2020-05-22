
exports.up = function(knex) {
  return knex.schema.createTable("30Rock", tbl => {
    tbl.increments();
    tbl.string("name", 125).notNullable();
  });

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("30Rock");

};
