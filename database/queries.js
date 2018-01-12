var db = require('./config.js');

//Query functions

module.exports = {
	bookings: {
		get: function(req, res){
          var queryStr = "SELECT * from bookings"
          db.query(queryStr, function(err, result){
          	if(err) {
          		res.statusCode(500)
          	} else {
          		res.json(result)
          	}
          })
		},
		post: function(req, res){
         
		}
	}
}

