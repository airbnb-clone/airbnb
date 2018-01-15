import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import Listings from './components/Listings.jsx'
import axios from 'axios';
import {BrowserRouter, Route, BrowserHistory, Link} from 'react-router-dom';
import Main from './components/Main.jsx'
import UserComponent from './components/UserComponent.jsx'
import ListingEntryDetails from './components/ListingEntryDetails.jsx'
import Navigation from './components/Navigation.jsx';

 export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: [],
      bookings: [],
      city: null,
      searched: false
    }
    this.search = this.search.bind(this);
    this.goHome = this.goHome.bind(this);
    this.goToTrips = this.goToTrips.bind(this);
  }

  search(city) {
    axios.get('/listings-bryce', {
      params: {
        city: city
      }
    })
    .then((response) => {
      this.setState({listings: response.data, city: city, searched: true})
      this.forceUpdate();
      this.props.history.push('/listings/' + city)
      this.props.location.state = {city: city}
    })
    .catch(error => console.log(error))
  }

  goHome() {
    this.setState({listings: [], searched: false});
  }

  goToTrips() {
    this.setState({searched: true});
  }

  render() {
    return(
      <div>
        <div className="nav">
          <Navigation searched={this.state.searched} search={this.search} goHome={this.goHome} goToTrips={this.goToTrips}/>
        </div>
        {this.state.searched ? null : <div className="mainSearch"><Search search={this.search}/></div>}
      </div>
    );
  }
}


ReactDOM.render(
  <BrowserRouter history={BrowserHistory}>
    <div>
      <Route path='/' component={App}/>
      <Route path='/bookings' component={UserComponent}/>
      <Route exact path='/listings/:city' render={(props) => <Listings match={props.match}/>}/>
      <Route path='/listings/:city/:id' render={(props) => <ListingEntryDetails match={props.match}/>}/>
    </div>
  </BrowserRouter>
  , document.getElementById('app'));
