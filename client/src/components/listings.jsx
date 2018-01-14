import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ListingEntry from './ListingEntry.jsx';
import {Switch, Route} from 'react-router-dom';

export default class Listings extends React.Component {
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
            this.state.list.map((listing, index) => {
              return <ListingEntry listing={listing} key={index} />
            })
          }
        </div>
      )
    }
  }
}
