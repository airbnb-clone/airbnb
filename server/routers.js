const express = require('express');
const router = express.Router();

const getAllListings = require('./../database/queries/getAllListings.js');
const getListingsByCity = require('./../database/queries/getListingsByCity.js');
const checkAvailability = require('./../database/queries/checkAvailability.js');
const saveReservation = require('./../database/queries/saveReservation.js');


router.get('*/listings-bryce', (req, res) => getListingsByCity(req.query.city, results => res.send(results)));

router.post('*/bookings-james', (req, res) => {
  var dates = req.body.data;
  var listingId = req.body.listing;
  var userId = req.body.user;
  checkAvailability(listingId, dates, function(results) {
    if (results) {
      saveReservation(listingId, userId, dates, function(results) {
        res.send('success');
      });
    } else {
      res.send('failure');
      console.log('failed'); // render failures 'already booked' page
    }
  });
});

router.get('*/listings-ted', (req, res) => getAllListings(results => {
  console.log(results)
  res.json(results);
}
));






module.exports = router;
