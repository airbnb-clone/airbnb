const express = require('express');
const router = express.Router();

const getAllListings = require('./../database/queries/getAllListings.js');
const checkAvailability = require('./../database/queries/checkAvailability.js')

router.get('*/listings-bryce', (req, res) => getListingsByCity(req.query.city, results => res.send(results)));

router.post('*/bookings-james', (req, res) => {
			var dates = req.body.data;
			var listingId = req.body.listing;
			checkAvailability(listingId, dates, function(results){
				if (results){
					console.log(' inserting')
				} else {
					console.log('unavailable')
				}
			})
  })





module.exports = router;
  