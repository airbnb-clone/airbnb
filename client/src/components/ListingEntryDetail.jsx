import React from 'react';
import axios from 'axios';
// import BookingWindow from './BookingWindow.jsx';

class Listing extends React.Component {
  // for React router, this should take in a match object containing only listingId
  // GET to server to query DB to get all of the listing's details
  constructor(props) {
    super(props);

    this.state = {
      latLong: null,
      listing: null,
      // intended to prevent map from rendering if no latLong
      mapVis: true,
      address: '323 Birch Street, Boston MA 02131'
    }
  }

  componentWillMount() {
    // to getAllDetails which then invokes getLatLong
  }

  getLatLong() {
    // make GET request to server to geocode address
    if (this.state.latLong === null) {
      var context = this;
      axios.get('/geocode-iris', {
        params: {
          address:
          this.state.address
        }
      })
      .then((response) => {
          // navigating through the response's structure is a doozy
          this.setState({latLong: response.data.json.results[0].geometry.location});
          // {lat: 42.2828747, lng: -71.13467840000001}
      })
      .catch((err) => {
        if (err) {
          this.setState({mapVis: false});
        }
      })  ;
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

export default Listing;
