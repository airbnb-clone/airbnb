import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class ListingEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

        <div className="listingDiv">
        <img className="listingImage" src={this.props.item.pic_url} />
        <h5> {this.props.item.name}</h5>
        <Link to="/listings/5"> <button className="button">See More </button> </Link>

      </div>
  
    )
  }
}

const Child = ({match}) => (
  <div id="child">
    <h3> ID: {match.params.id} </h3>
  </div>
)


export default ListingEntry;
