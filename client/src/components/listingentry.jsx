import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import ListingEntryDetails from './ListingEntryDetails.jsx'

export default class ListingEntry extends React.Component {
  constructor(props) {
    super(props);
    console.log(this)
  }

  render() {
    return (
      <div className="listingDiv">
        <Link to={`/listings/${this.props.listing.city}/${this.props.listing.id}`}>
          <img className="listingImage" src={this.props.listing.pic_url} />
        </Link>
        <Link to={`/listings/${this.props.listing.city}/${this.props.listing.id}`}>

          <h5> {this.props.listing.name}</h5>
        </Link>
      </div>
    )
  }
}
