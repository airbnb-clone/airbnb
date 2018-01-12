import React from 'react';
import axios from 'axios';
// import BookingWindow from './BookingWindow.jsx';

class ListingEntryDetail extends React.Component {
  // for React router, this should take in a match object containing only listingId
  // GET to server to query DB to get all of the listing's details
  constructor(props) {
    super(props);

    this.state = {
      
      // match.params.listingId || this.props.listingId,
      latLong: null,
      listing: null,
      mapVis: true, // to prevent map from rendering if no latLong

      // TEMP hard-coding data for now to test functionality
      listingId: 8887,
      address: '323 Birch Street, Boston MA 02131'
    }

    this.getLatLong = this.getLatLong.bind(this);
    this.getAllDetails = this.getAllDetails.bind(this);
    this.setAddress = this.setAddress.bind(this);
  }

  componentWillMount() {
    this.getAllDetails(this.state.listingId);
  }

  getAllDetails(listingId) {
    //under the assumption that this component will only get a listingId passed in from match.params.id
    var context = this;
    axios
    .get('/listings-iris', { params: {listingId: listingId} })
      // TO DO: after React router implementation, params: {listingId: match.params.listingId}
    .then((response) => {
      console.log(response.data[0]);
      context.setState({listing: response.data[0]});
      context.setAddress(context.getLatLong);

    })
    // TO DO: render something else when there is an error
    // MAYBE A MODAL??
    .catch((err) => console.log(err));
  }

  setAddress(callback) {
    let address = `${this.state.listing.street_address}, ${this.state.listing.city} ${this.state.listing.zip_code}`;
    this.setState({address: address});
    // invoke getLatLong after getting address set
    callback();   
  }

  // make GET request to server to geocode address
  getLatLong() {
    if (this.state.latLong === null) {
      var context = this;
      axios
      .get('/geocode-iris', { params: {address: context.state.address} })
      .then((response) => context.setState({latLong: response.data.json.results[0].geometry.location}))
          // navigating through the response's structure is a doozy
          // should be this format {lat: 42.2828747, lng: -71.13467840000001}
      .catch((err) => {
        if (err) {
          console.log('errored out');
          context.setState({mapVis: false});
        }
      });
    }
  }

  
  render() {
    return (
      <div>
        {this.state.title}
        {this.state.description}
      
        {
        // intend to render BookingWindow component 
        //<BookingWindow maxGuests={this.state.fakeListing.num_guests} price={this.state.fakeListing.nightly_price} listingId={this.state.fakeListing.listingId} />
        }

      </div>
    );
  }
}

export default ListingEntryDetail;
