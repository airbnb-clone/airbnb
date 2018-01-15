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
      search: this.props.match.params.city,
    }
    this.waiting = true
  }


  componentWillReceiveProps(Nextprops){
    if(this.waiting){
    this.setState({
        search: Nextprops.match.params.city
    })
  }
    console.log(this)
  }

  componentDidUpdate(){
    if(this.waiting){
    this.getInfo()
  }
  }

  componentDidMount() {
    if(this.state.list.length === 0 && this.waiting) {
      axios.get('/listings-bryce', {params: {
        city: this.state.search
      }})
      .then(response => {
        this.setState({list: response.data});

      })
      .catch(error => console.log(error))
    }
  }

  componentWillUnmount(){
    this.waiting = false
    console.log(this)
  }

  getInfo(){
    axios.get('/listings-bryce', {params: {
      city: this.state.search
    }})
    .then(response => {
      this.setState({list: response.data});

    })
    .catch(error => console.log(error))
  }


  render() {
    if (!this.state.list.length >0 ) {
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
