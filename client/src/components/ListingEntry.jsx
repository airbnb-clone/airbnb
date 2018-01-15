import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

export default class ListingEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="listingDiv">
        <Link to={`/listings/${this.props.listing.id}`}><img className="listingImage" src={this.props.listing.pic_url} /> </Link>
        <Link to={`/listings/${this.props.listing.id}`}><h5> {this.props.listing.name}</h5></Link>

      </div>
    )
  }
}
