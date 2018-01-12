const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyBHpT6DK_qPNSsqGlDR0FHA_-pYtQ6tKkk',
  Promise: Promise
});

var getLatLong = (address, callback) => {
  googleMapsClient
  .geocode({ address: address })
  .asPromise()
  .then((response) => {
    callback(response);
  })
  .catch((err) => {
    console.log('err', err);
  })
}

module.exports = getLatLong;