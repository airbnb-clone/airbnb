const connection = require('./../config.js');

const getAllListings = (callback) => {
  const sql = `SELECT * FROM listings`;
  connection.query(sql, (err, result, fields) => err ? callback(err) : callback(result));
}

module.exports = getAllListings;
