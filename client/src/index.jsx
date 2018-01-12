import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import axios from 'axios';
import UserComponent from './components/UserComponent.jsx'
import { BrowserRouter,  Route, IndexRoute, hashHistory, Link } from 'react-router-dom';

 export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: [],
      bookings: [],
      viewBookings: false
    }
    console.log(props)

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

  viewBookings(boolean){
    this.setState({
      viewBookings: boolean
    })
  }

  render() {
    return (
      <div>
        <Search search={this.search} />
        <Link to='/user'><button>button</button></Link>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter history={hashHistory}>
    <div>
      <Route path='/' exact component={App}></Route>
      <Route path='/user' component={UserComponent}></Route>
    </div>
  </BrowserRouter>
  , document.getElementById('app'));



