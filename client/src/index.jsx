import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import Listings from './components/listings.jsx'
import axios from 'axios';
import {BrowserRouter, Route, BrowserHistory, Link, Switch, IndexRoute, Redirect} from 'react-router-dom';
import Main from './components/main.jsx'
import UserComponent from './components/UserComponent.jsx'
import ListingEntryDetails from './components/ListingEntryDetails.jsx'

 export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: [],
      bookings: [],
      city: null
    }
    this.search = this.search.bind(this);
  }

  search(city) {
    axios.get('/listings-bryce', {
      params: {
        city: city
      }
    })
    .then((response) => {
      this.setState({listings: response.data, city: city})
      console.log(this)
      this.props.history.push('/listings/' + city)
      this.props.location.state = {city: city}
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Search search={this.search} />
        <Link to="/bookings"><button>button</button></Link>
      </div>
    )
  }
}


ReactDOM.render(<BrowserRouter history={BrowserHistory}>
    <div>
      <Route path='/' component={App}/>
      <Route path='/bookings' component={UserComponent}/>
      <Route exact path='/listings/:city' render={(props) => <Listings match={props.match}/>}/>
      <Route path='/listings/:city/:id' render={(props) => <ListingEntryDetails match={props.match}/>}/>
    </div>
  </BrowserRouter>
  , document.getElementById('app'));
