import React, { Component } from 'react';
import API from './../../../api/env.js';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.jsx';

const Container = ({ latLong }) => <div><Marker /></div>;

export default class GMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latLong: this.props.latLong || { lat: 42.2828747, lng: -71.13467840000001 },
      zoom: 15,
      apiKey: API.GMapKey,
      style: {
      width: '50vw',
      height: '50vh'
      }
    }
  }

  render() {
    return (
      <div className='google-map' style={this.state.style}>
        <GoogleMapReact
          bootstrapURLKeys={ {key: this.state.apiKey} } 
          defaultCenter={ this.state.latLong }
          defaultZoom={ this.state.zoom }>
          <Container 
            latLong={this.state.latLong}
          />
        </GoogleMapReact>
      </div>
    );
  }
}