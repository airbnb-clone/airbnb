const connection = require('./../config.js');
let Promise = require('bluebird');

const saveReservation = (listing, user, dates, callback) => {
  let promises = [];

  let promisify = sql => {
    return new Promise((resolve, reject) => connection.query(sql, (err, results) => err ? reject(err) : resolve(results)));
  };

  dates.forEach(date => {
    let sql = `INSERT INTO bookings (listing_id, user_id, dateRented) VALUES (${listing}, ${user}, '${date}');`;
    promises.push(promisify(sql));
  });

  Promise.all(promises).then(values => callback(values)); 
};

module.exports = saveReservation;