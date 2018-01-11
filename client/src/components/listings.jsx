import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import Listing from './listing.jsx';

class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [1, 2]
    }
  }

  componentDidMount() {
    var context = this;
    axios.get('/listings-ted')
    .then(response => {
      this.setState({list: response.data});
      context.forceUpdate();
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
      <h3><u>All listings</u></h3>
      {
        this.state.list.map((item, index) => {
          {console.log(item)}
          return (
            <div className="listingDiv">
            <img className="listingImage" src={item.pic_url} />
            <h5> {item.name}</h5>
            <button className="button">See More </button>
          </div>)


        }
      )
      }
    </div>
    )
  }



}

export default Listings;
