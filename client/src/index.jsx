import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import Listings from './components/listings.jsx'
import axios from 'axios';
import {BrowserRouter, Route, BrowserHistory, Link} from 'react-router-dom';
import Main from './components/main.jsx'
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

  // render() {
  //   return (
  //     <div>
  //       <Search search={this.search} />
  //       <Link to="/bookings"><button>button</button></Link>
  //     </div>
  //   )
  goHome() {
    this.setState({listings: [], searched: false});
    //this.forceUpdate();
  }

  render() {
// <<<<<<< HEAD
//     if (this.state.listings.length > 0) {
//       return (
//         <div>
//           <Navigation searched={this.state.searched} goHome={this.goHome}/>
//           <Listings list={this.state.listings}/>
//         </div>
//       )
//     } else {
//       return (
//         <div>
//           <Navigation searched={this.state.searched} />
//           <div className="mainSearch">
//             <Search search={this.search} />
//           </div>
//         </div>
//       );
//     }
// =======
    return(
      <div>
        <Navigation searched={this.state.searched} search={this.search}/>
        {this.state.searched ? null : <div className="mainSearch"><Search search={this.search}/></div>}
        <Link to="/bookings"><button>button</button></Link>
      </div>
    )
// >>>>>>> 637ad4044ea7c0b43c50107dbd31542d4b56494e
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
