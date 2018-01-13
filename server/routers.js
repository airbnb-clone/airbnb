const express = require('express');
const router = express.Router();

const getAllListings = require('./../database/queries/getAllListings.js');
const getListingsByCity = require('./../database/queries/getListingsByCity.js');
const checkAvailability = require('./../database/queries/checkAvailability.js');
const saveReservation = require('./../database/queries/saveReservation.js');
const googleAPI = require('./../api/gMapClient.js');
const getListingById = require('./../database/queries/getListingById.js');


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
  res.json(results);
}
));

router.get('*/listings-iris', (req, res) => {
  var finalResults = {};
	getListingById(req.query.listingId)
  .then((listingObj) => {
    finalResults.listing = listingObj[0];
    return googleAPI.getAddress(JSON.stringify(listingObj));
  })
  .then((addr) => {
    finalResults.address = addr;
    return googleAPI.getLatLong(addr, (data) => {
      finalResults.latLong = data.json.results[0].geometry.location;
      res.json(finalResults);
    })   
  })
  .catch(err => res.json(err));
})


module.exports = router;
