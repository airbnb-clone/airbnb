const connection = require('./../config.js');

const getListingById = (id, callback) => {
  id = JSON.stringify(id);
  const query = `SELECT * FROM listings WHERE id=${id}`;
  connection.query(query, (err, result, fields) => err ? callback(err) : callback(result));
}

module.exports = getListingById;