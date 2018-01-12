import React from 'react';
import axios from 'axios';
import BookingWindow from './BookingWindow.jsx';
import GMap from './GMap.jsx';

class Listing extends React.Component {
  // for React router, this should take in a match object containing only listingId
  // GET to server to query DB to get all of the listing's details
  constructor(props) {
    super(props);

    this.state = {
      fakeListing: {
      listingId: 5,
      title: 'Charming craftsman 3 bdm house',
      summary: 'Cozy family craftman house in beautiful neighborhood of Queen Anne, Seattle, Washinton.',
      description: '3 bedrooms, can accomodate up to 6 people. 1,200 sq. feet space is your oasis. Perfect location, walking distance to Whole Foods Market...',
      pic_url: 'http://via.placeholder.com/350x150',
      bedrooms: 3,
      rating: 5,
      bathrooms: 2,
      num_guests: 6,
      neighborhood: 'Belltown',
      nightly_price: 175,
      cancellation_policy: 'Moderate',
      street_address: '323 Birch Street',
      city: 'Boston',
      zip_code: '02131',
      state: 'MA'  
      },
      listing: this.props.listing,
      listingId: this.props.listingId,
      title: this.props.title,
      summary: this.props.summary,
      description: this.props.description,
      pic_url: this.props.pic_url,
      bedrooms: this.props.bedrooms,
      rating: this.props.rating,
      bathrooms: this.props.bathrooms,
      num_guests: this.props.num_guests,
      neighborhood: this.props.neighborhood,
      nightly_price: this.props.nightly_price,
      cancellation_policy: this.props.cancellation_policy,
      street_address: this.props.street_address,
      zip_code: this.props.zip_code,
      state: this.props.state,
      latLong: {},
      showMap: false
    }
  }

  // componentWillMount() {
  //   this.getLatLong();
  //   this.getMap();
  // }
  getAllDetails() {
    //under the assumption that this component will only get a listingId passed in from match.params.id
    axios
    .get('/listings-iris', {
      params: {listingId: 
        this.props.listingId
      }
      // params: {listingId: match.params.listingId}
    })
    .then((response) => {
      this.setState({listing: response});

    })
    // need to figure out what to do when there are no details
    .catch((err) => console.log(err));
  }

  getLatLong() {
    // pass address to server in a GET
    if (!this.state.lat || !this.state.long) {
      var context = this;
      axios.get('/geocode-iris', {
        params: {
          address:
          `${context.state.fakeListing.street_address}, ${context.state.fakeListing.city} ${context.state.fakeListing.zip_code}`
          // '323 Birch Street, Boston MA 02131'
        }
      }
        /// need to pass in address in here
        ).then((response) => {
          console.log(response.data.json.results[0].geometry.location);
          // navigating through the response's structure is a doozy
          this.setState({latLong: response.data.json.results[0].geometry.location});
          // {lat: 42.2828747, lng: -71.13467840000001}
      });
    }
  }

  

  render() {
    return (
      <div>
          <GMap />
        {this.state.title}
        {this.state.description}
      
        {//<BookingWindow maxGuests={this.state.fakeListing.num_guests} price={this.state.fakeListing.nightly_price} listingId={this.state.fakeListing.listingId} />
        }

      </div>
    );
  }
}

export default Listing;
