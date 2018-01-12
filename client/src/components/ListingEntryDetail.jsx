import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
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
    console.log('ROUTES BREH', this.props.routes);
    console.log('PARAMS BREH', this.props.match.params.id);
    this.getAllDetails(this.props.match.params.id);
  }

  getAllDetails(listingId) {
    //under the assumption that this component will only get a listingId passed in from match.params.id
    var context = this;
    axios
    .get('/listings-iris', { params: {listingId: listingId} })
      // TO DO: after React router implementation, params: {listingId: match.params.listingId}
    .then((response) => {
      console.log(response.data[0]);
      context.setState({
        listing: response.data[0],
        id: response.data[0].id,
        num_guests: response.data[0].num_guests,
        bedrooms: response.data[0].bedrooms,
        bathrooms: response.data[0].bathrooms,
        name: response.data[0].name,
        cancellation_policy: response.data[0].cancellation_policy,
        city: response.data[0].city,
        neighborhood: response.data[0].neighborhood,
        state: response.data[0].state,
        price: response.data[0].nightly_price,
        summary: response.data[0].summary,
        zip_code: response.data[0].zip_code,
        pic_url: response.data[0].pic_url,
        rating: response.data[0].rating || 3,
        description: response.data[0].description
         });
      context.setAddress(context.getLatLong);

    })
    // TO DO: render something else when there is an error
    // MAYBE A MODAL??
    .catch((err) => console.log('received error', err));
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
        <Link to={"/"}> Go back </Link>


          <h3> {this.state.name} </h3>
          <img src={this.state.pic_url} />


          <p>{this.state.description}</p>

        {
        // intend to render BookingWindow component
        //<BookingWindow maxGuests={this.state.fakeListing.num_guests} price={this.state.fakeListing.nightly_price} listingId={this.state.fakeListing.listingId} />
        }
      </div>
    );
  }
}

export default ListingEntryDetail;
