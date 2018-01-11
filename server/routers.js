const express = require('express');
const router = express.Router();

const getAllListings = require('./../database/queries/getAllListings.js');

router.get('*/listings-bryce', (req, res) => getAllListings(results => console.log(results)));





module.exports = router;
  