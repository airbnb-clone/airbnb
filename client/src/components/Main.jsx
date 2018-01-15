import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Listings from './Listings.jsx';
import ListingEntryDetails from './ListingEntryDetails.jsx';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState){
    console.log(prevProps);
  }
  render() {
    return(
      <main>
        <Switch>
          <Route exact path="/" render={(props)=> (<Listings list={this.props.listings} onSearch={this.props.onSearch} search={this.props.search}/>)} />
          <Route path="/listings/:id" component={ListingEntryDetails} />
        </Switch>
      </main>
    )
  }
}
