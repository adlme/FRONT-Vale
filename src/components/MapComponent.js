import React, { Component } from 'react'
import {Map, Polygon, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import BackNav from './BackNav'
 
export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  render() {
    const style = {
      width: '100%',
      height: '92.4%',
      top:'51px'
    }
    return (
        <div className="map-wrapper">
          <BackNav/>
          <Map google={this.props.google}
            style={style}
            initialCenter={{
              lat: 41.3977351,
              lng: 2.1903
            }}
            zoom={15}
            onClick={this.onMapClicked}
            className={'map'}
            >
            <Marker
              onClick={this.onMarkerClick}
              title={'The marker`s title will appear as a tooltip.'}
              name={'SOMA'}
              position={{lat: 41.7855837, lng: 2.3912362}} 
              // icon={{
              //   url: "../images/map-marker.png",
              //   anchor: new window.google.maps.Point(32,32),
              //   scaledSize: new window.google.maps.Size(30,30)
              // }} 
              />
            <Marker
              onClick={this.onMarkerClick}
              name={'Camp Nou'}
              position={{lat: 41.380896, lng: 2.1270376}} 
              // icon={{
              //   url: "../images/map-marker.png",
              //   anchor: new window.google.maps.Point(32,32),
              //   scaledSize: new window.google.maps.Size(64,64)
              // }} 
              />
              
            <Marker />
            <Marker
              onClick={this.onMarkerClick}
              name={'Bar Montesquiu'}
              position={{lat: 41.4046994, lng: 2.1324772}}
              // icon={{
              //   url: "../images/map-marker.png",
              //   anchor: new window.google.maps.Point(32,32),
              //   scaledSize: new window.google.maps.Size(64,64)
              // }}
               />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
          </Map>
        </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyCKzAyrgIkANHcVXChqBzKpjfM0l_L1HYs"
})(MapContainer)