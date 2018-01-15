import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import Listings from './components/Listings.jsx'
import axios from 'axios';
import {BrowserRouter, Route, hashHistory, Switch} from 'react-router-dom';
import Main from './components/Main.jsx';
import Navigation from './components/Navigation.jsx';

 export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: [],
      bookings: [],
      search: false,
      searched: false
    }

    this.search = this.search.bind(this);
    this.goHome = this.goHome.bind(this);
    this.searched = this.searched.bind(this);
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

      this.setState({listings: response.data, searched: true});
      this.forceUpdate();

    })
    .catch(error => console.log(error))
  }

  searched() {
    this.setState({search: true});
  }

  goHome() {
    this.setState({listings: [], searched: false});
    this.forceUpdate();
  }

  render() {

      return (
        <div>
          <Navigation searched={this.state.searched}/>
          <Search search={this.search} />
          <Main listings={this.state.listings} onSearch={this.searched} search={this.state.search}/>
        </div>
      );
    // }
  }
}


ReactDOM.render(<BrowserRouter history={hashHistory}>
  <App />
</BrowserRouter>
  , document.getElementById('app'));
