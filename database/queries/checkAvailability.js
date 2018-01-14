const connection = require('./../config.js');

const checkAvailability = (listing, dates, callback) => {
  let sql = `SELECT * FROM bookings WHERE listing_id=${listing}`;

  connection.query(sql, (err, results) => {
    let availability = true;
    if (err) {
      console.log(err);
    } else {
      let bookedDates = [];
      results.forEach(result => bookedDates.push(result.dateRented));

      let formattedDates = bookedDates.map(datesBooked => datesBooked.toString().split(' ').slice(0, 5).join(' '));
      dates.forEach(date => {
        let unixDate = Date.parse(date);
        formattedDates.forEach(formDate => {
          let unixFormDate = Date.parse(formDate);
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