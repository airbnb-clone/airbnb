import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ListingEntry from './ListingEntry.jsx';
import {Switch, Route} from 'react-router-dom';

export default class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list || [],
      search: false
    }
  }

  componentDidMount() {

    if(this.state.list.length === 0) {
      axios.get('/listings-ted')
      .then(response => {
        this.setState({list: response.data});

      })
      .catch(error => console.log(error))
    }
  }

  componentDidUpdate(prevProps, prevState) {

      if(prevProps.list !== prevState.list) {
        this.setState({list: prevProps.list});


      }

  }

  render() {
    if (!this.state.list.length >0) {
      return null;
    } else {
      const explore = this.props.search ? `Explore ${this.state.list[0].city}`: 'All Listings';

      return (
        <div>
          <h3><u>{explore}</u></h3>
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
