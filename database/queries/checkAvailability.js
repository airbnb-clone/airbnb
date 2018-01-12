
const connection = require('./../config.js');

const checkAvailability = (listing, dates, callback) => {
  var queryString = 'select * from bookings where listing_id = ' + listing;


  connection.query(queryString, (err, results) => {
    var availability = true;
    if (err) {
      console.log(err);
    } else {
      var bookedDates = [];
      results.forEach(result => {
        bookedDates.push(result.dateRented);
      });
      var formattedDates = bookedDates.map(bd => bd.toString().split(' ').slice(0, 5).join(' '));
      dates.forEach(date => {
        var unixDate = Date.parse(date);
        formattedDates.forEach(formDate => {
          var unixFormDate = Date.parse(formDate);
          if (unixDate === unixFormDate) {
            availability = false;
          }
        });
      });
      callback(availability);
    }
  });

};

module.exports = checkAvailability;


