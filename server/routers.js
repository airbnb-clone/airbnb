const express = require('express');
const router = express.Router();

const getAllListings = require('./../database/queries/getAllListings.js');
const user = require('./../database/queries/getBooking.js');

router.get('*/listings-bryce', (req, res) => getAllListings(results => console.log(results)));
router.get('/usercomponent-v', (req, res) => user.getAllBooking(function(err, results){
	if(err){
      return res.statusCode(500)
	} else {
	  return res.json(results)
	}
}));
router.post('/usercomponent-v', (req, res) => user.cancelReservation(function(err, results){
	//console.log(req.body.id)
	if(err) { 
      console.log(err)
	} else {
	  res.json(results)
	}
}, req.body.id))





module.exports = router;
  