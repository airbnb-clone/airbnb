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
        <img className="listingImage" src={this.props.listing.pic_url} />
        <h5> {this.props.listing.name}</h5>
        <Link to={`/listings/${this.props.listing.id}`}> <button className="button">See More </button> </Link>
      </div>
    )
  }
}
