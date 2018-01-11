const express = require('express');
const router = express.Router();

const getAllListings = require('./../database/queries/getAllListings.js');
const getListingsByCity = require('./../database/queries/getListingsByCity.js');

router.get('*/listings-bryce', (req, res) => getListingsByCity(req.query.city, results => res.send(results)));





module.exports = router;
  