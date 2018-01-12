import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.jsx';


const Container = ({ text }) => <div>{ text }</div>;

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      center: { lat: 42.2828747, lng: -71.13467840000001 },
      zoom: 15,
      apiKey: 'AIzaSyBvMnTeL3NQ5e6C0HT_u7oRRnGWCjq0U-U'
    }
   
  }
render() {
  const style = {
      width: '50vw',
      height: '50vh'
    }
    return (
      <div className='google-map' style={style}>
        <GoogleMapReact
          bootstrapURLKeys={{key: this.state.apiKey}} 
          defaultCenter={ this.state.center }
          defaultZoom={ this.state.zoom }>
          <Container
            lat={ 40.7473310 }
            lng={ -73.8517440 }
          />
          {//<Marker
            //   name={'Dolores park'}
            //   position={this.state.center} />
            // <Marker />
          }
        </GoogleMapReact>
      </div>
    )
  }
}