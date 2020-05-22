const db = require("../data/dbConfig.js");

module.exports = {
  get30Rockers,
  get30RockersById,
  add30Rocker,
  update30Rocker,
  delete30Rocker
};

function get30Rockers() {
  return db("30Rock");
}

function get30RockersById(id) {
  return db("30Rock").where({id});
}

function add30Rocker(a30Rocker) {
  return db("30Rock")
  .insert(a30Rocker)
  .then(() => {
    return db("30Rock")
    .where({ name: a30Rocker.name })
    .first();
  });
}

function update30Rocker(changes, id) {
  return db("30Rock")
  .where({ id })
  .update(changes)
  .then(() => {
    return get30RockersById(id);
  });
}

function delete30Rocker(id) {
  const goodbye30Rocker = get30RockersById(id).first();
  db("30Rock")
  .where({ id })
  .del();
  return goodbye30Rocker;
}
