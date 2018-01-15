import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import BookingWindow from './BookingWindow.jsx';
import GMap from './GMap.jsx';

import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Container, Row, Col } from 'reactstrap';

export default class ListingEntryDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingId:  this.props.match.params.id ||  this.props.id,
      latLong: null, // should be this format {lat: 42.2828747, lng: -71.13467840000001}
      listing: null,
      mapVis: true, // to prevent map from rendering if no latLong
      address: ''
    }
    console.log(this)
    this.getAllDetails = this.getAllDetails.bind(this);
  }

  componentDidMount() {
    this.getAllDetails(this.props.match.params.id);
  }

  getAllDetails(listingId) {
    //gets listing info from DB and latLong from Google Geocode API
    var context = this;
    axios
    .get('/listings-iris', { params: {listingId: listingId} })
    .then(response => {
      context.setState(
        {
          listing: response.data.listing,
          latLong: response.data.latLong, 
          address: response.data.address
        })
      })
    // TO DO: render something else when there is an error
    // MAYBE A MODAL??
    .catch((err) => {
      context.setState({ mapVis: false });
      console.log('received error', err)
    })
  }

  // TO DO: if no latLong returned from the GET request, this.state.mapVis needs to be false

  render() {
    if(this.state.listing === null ) {
       return null;
     } else {
      return (
      <div>
      <Link to={"/"}> Go back </Link>

        <div className="listgroup-container">
          
          <ListGroup className="listgroup-info">

            <ListGroupItem>
              <h3>{this.state.listing.name}</h3>
            </ListGroupItem>

            <ListGroupItem>
              <ListGroupItemHeading>About the Listing</ListGroupItemHeading>
              <ListGroupItemText>
              {this.state.listing.summary + ' ' + this.state.listing.description}
              </ListGroupItemText>
            </ListGroupItem>

            <ListGroupItem>
              <ListGroupItemHeading>Neighborhood</ListGroupItemHeading>
              <ListGroupItemText>
              {this.state.listing.neighborhood}
              </ListGroupItemText>
            </ListGroupItem>

            <ListGroupItem>
              <ListGroupItemHeading>Maximum Number of Guests</ListGroupItemHeading>
              <ListGroupItemText>
              {this.state.listing.num_guests}
              </ListGroupItemText>
            </ListGroupItem>

            <ListGroupItem>
              <ListGroupItemHeading>Bedrooms</ListGroupItemHeading>
              <ListGroupItemText>
              {this.state.listing.bedrooms}
              </ListGroupItemText>
            </ListGroupItem>

            <ListGroupItem>
              <ListGroupItemHeading>Bathrooms</ListGroupItemHeading>
              <ListGroupItemText>
              {this.state.listing.bathrooms}
              </ListGroupItemText>
            </ListGroupItem>
            
            <ListGroupItem>
              <ListGroupItemHeading>Cancellation Policy</ListGroupItemHeading>
              <ListGroupItemText>
              {this.state.listing.cancellation_policy}
              </ListGroupItemText>
            </ListGroupItem>

          </ListGroup>

          <div className="listgroup-bookingwindow">
            <BookingWindow key={this.state.listingId} maxGuests={this.state.listing.num_guests} price={this.state.listing.nightly_price} rating={this.state.rating} listingId={this.state.listingId} />
          </div>

        </div>

        <img src={this.state.pic_url} />
        <GMap latLong={this.state.latLong} />
      </div> 
      );
    }
  }
}
