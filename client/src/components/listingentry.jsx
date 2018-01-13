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
        <Link to={"/listings/" + this.props.item.id}> <button className="button">See More </button> </Link>

      </div>

    )
  }
}




export default ListingEntry;
