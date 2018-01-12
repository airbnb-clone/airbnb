
const connection = require('./../config.js');
var Promise = require('bluebird');

const saveReservation = (listing, user, dates, callback) => {
  var promises = [];

  var promisify = function(insertString) {
    return new Promise((resolve, reject) => {
      connection.query(insertString, (err, results) => {
        if (err) {
          reject(err); 
        } else {
          resolve(results);
        }
      });
    });
  };

  dates.forEach(date => {
    var insertString = `insert into bookings (listing_id, user_id, dateRented) values (${listing}, ${user}, '${date}');`;
    promises.push(promisify(insertString));
  });

  Promise.all(promises).then(function(values) {
    callback(values); // render success page 
  });
};

module.exports = saveReservation;


