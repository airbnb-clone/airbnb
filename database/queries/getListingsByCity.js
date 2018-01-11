const connection = require('./../config.js');

const getListingsByCity = (city, callback) => {
  city = JSON.stringify(city);
  const sql = `SELECT * FROM listings WHERE city=${city}`;
  connection.query(sql, (err, result, fields) => err ? callback(err) : callback(result));
}

module.exports = getListingsByCity;