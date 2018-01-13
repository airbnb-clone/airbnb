const connection = require('./../config.js');

const getListingById = (id) => {
  id = JSON.stringify(id);
  const query = `SELECT * FROM listings WHERE id=${id}`;
  return new Promise ((resolve, reject) => {
    connection.query(query, (err, result, fields) => err ? reject(err) : resolve(result));
  })
}

module.exports = getListingById;