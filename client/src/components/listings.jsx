import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ListingEntry from './listingentry.jsx';
import {Switch, Route} from 'react-router-dom';

class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list || []
    }
  }

  componentDidMount() {
    var context = this;
    if(this.state.list.length === 0) {
      axios.get('/listings-ted')
      .then(response => {
        this.setState({list: response.data});
        context.forceUpdate();
      })
      .catch(error => console.log(error))

    } else {

    }
  }

  render() {
    if (!this.state.list.length >0) {
      return null;
    } else {

      return (
        <div>
          <h3><u>All listings</u></h3>
          {
            this.state.list.map((item, index) => {
              return <ListingEntry item={item} key={index} />
            })
          }

        </div>
      )
    }
  }



}

export default Listings;
