import React from 'react';
import ReactDOM from 'react-dom';


class ListingEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      (
        <div className="listingDiv">
        <img className="listingImage" src={this.props.item.pic_url} />
        <h5> {this.props.item.name}</h5>
        <button className="button">See More </button>
      </div>)
    )
  }
}


export default ListingEntry;
