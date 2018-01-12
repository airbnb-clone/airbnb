const connection = require('./../config.js');

const getAllBooking = (callback) => {
  var queryStr = "select listings.* , bookings.* from listings inner join bookings where bookings.listing_id = listings.id;" 
   connection.query(queryStr, function(err, results) {
     if(err) {
     	callback(err, null)
     } else {
     	callback(null, findDates(results))
     }
   }) 
}

const cancelReservation = (callback, indexArr) => {
  indexArr.forEach(function(each){
    queryStr = "DELETE from bookings where id = ?"
    params = each
    connection.query(queryStr, params, function(err, results){
      if(err){
        //callback(err, null)
      } else {
        // getAllBooking(callback)
        //callback(null, results)
      }
    })
  })
  getAllBooking(callback)
}

var findDates = function(dateArray){
  var conDate = [];
  var months = {
    01: 31,
    02: 28,
    03: 31,
    04: 30,
    05: 31,
    06: 30,
    07: 31,
    08: 31,
    09: 30,
    10: 31,
    11: 30,
    12: 31
  }
  var findCon = function(dateArray, last, con, i = 1){
    var cont = con;
    var split = JSON.stringify(dateArray[i].dateRented).split('T')[0].split('-')
    var currentDate = Number(split.slice(1,3).join(''))
    var lastDate = Number(last.slice(1,3).join(''))
    var end = months[Number(last[1])] === Number(last[2]) ? true : false;
    if(split[0] === last[0] && (lastDate + 1 === currentDate || (end && (Number(split[2]) === 01 && Number(split[1]) === Number(last[1]) + 1)))){
      //console.log(lastDate, currentDate, cont)
      cont.push(dateArray[i])
      if(dateArray[i + 1]) {
        findCon(dateArray, split, cont, i + 1)
      } else {
        cont.push(dateSort(cont))
        conDate.push(cont)
      }
    } else {
      cont.push(dateSort(cont))
      conDate.push(cont)
      cont = [dateArray[i]]
      if(dateArray[i + 1]){
        findCon(dateArray, split, cont, i + 1)
        //conDate.push(cont, dateSort(cont))
      } else {
        cont.push(dateSort(cont))
        conDate.push(cont)
      }
    }
  }
  var dateSort = function(array){
    var status = undefined
    for(var i = 0; i < array.length; i++){
      var currentDate = new Date()
      //console.log(typeof array[i].dateRented, typeof currentDate)
      if(new Date(array[i].dateRented) >= currentDate){
        status = 1
      } else {
        status = 0
      }
    }
    return status
  }
  //console.log(dateArray[0])
  findCon(dateArray,JSON.stringify(dateArray[0].dateRented).split('T')[0].split('-'), [dateArray[0]], 1)
  return conDate;
}

module.exports.getAllBooking = getAllBooking
module.exports.cancelReservation = cancelReservation