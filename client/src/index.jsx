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
  }

  search(city) {
    axios.get('/listings-bryce', {
      params: {
        city: city
      }
    })
    .then(response => this.setState({listings: response.data}))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Search search={this.search} />
        <Listings />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'))



