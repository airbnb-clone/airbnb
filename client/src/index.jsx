import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import Listings from './components/listings.jsx'
import axios from 'axios';
import {BrowserRouter, Route, hashHistory} from 'react-router-dom';
import Main from './components/main.jsx'

 export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: [],
      bookings: []
    }

    this.search = this.search.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  search(city) {
    var context = this;
    console.log(city);
    axios.get('/listings-bryce', {
      params: {
        city: city
      }
    })
    .then((response) => {
      console.log('DATA', response.data);

      context.setState({listings: response.data});
      context.forceUpdate();

    })
    .catch(error => console.log(error))
  }

  goHome() {
    this.setState({listings: []});
    this.forceUpdate();
  }
  render() {
    if(this.state.listings.length > 0) {
      return (
        <div>
          <Search search={this.search} />
          <div><button onClick={this.goHome}> Go back </button></div>
          <Listings list={this.state.listings}/>
        </div>
      )
    } else {

      return (
        <div>
          <Search search={this.search} />
          <Main listings={this.state.listings}/>
        </div>
      );
    }
  }
}


ReactDOM.render(<BrowserRouter history={hashHistory}>
  <App />
</BrowserRouter>
  , document.getElementById('app'));
