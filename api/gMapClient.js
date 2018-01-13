const API = require('./env.js');

const googleMapsClient = require('@google/maps').createClient({
  key: API.GeocodeKey,
  Promise: Promise
});
// it's cool that promises are native for this package
var getLatLong = (address, callback) => {
  googleMapsClient
  .geocode({ address: address })
  .asPromise()
  .then(response => callback(response))
  .catch((err) => console.log('err', err));
}

var getAddress = (listingStr) => {
  let listingObj = JSON.parse(listingStr)[0];
  let address = `${listingObj.street_address}, ${listingObj.city} ${listingObj.zip_code}`;
  return address;
}

module.exports = {
  getLatLong,
  getAddress
}