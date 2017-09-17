/* eslint-disable no-undef */
import { default as React, Component, } from "react";
import classNames from 'classnames';
import FaSpinner from "react-icons/lib/fa/spinner";
import MapsGoogleMap from '../MapsGoogleMap';
import 'bulma/css/bulma.css';
import c from './content.json'

export default class Maps extends Component {
  constructor (props) {
    super(props)

    const { key, lat, lng, directions, eventDescription, eventLocation } = props
    const infoContent = (
      <div className={classNames('box')}>
        <h1>{eventLocation}</h1>
        <p>{eventDescription}</p>
        <a className={classNames('button', 'is-primary', 'is-small')} href={directions}>{c.directions}</a>
      </div>
    )

    this.handleMapLoad = this.handleMapLoad.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMarkerClose = this.handleMarkerClose.bind(this);

    this.state = {
      markers: [{
        key,
        defaultAnimation: 2,
        position: {lat, lng},
        showInfo: true,
        infoContent
      }]
    }
  }

  handleMapLoad (map) {
    this._mapComponent = map;
  }

  // Toggle to 'true' to show InfoWindow and re-renders component
  handleMarkerClick (targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) return {...marker, showInfo: true};
        return marker;
      })
    });
  }

  handleMarkerClose (targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) return {...marker, showInfo: false};
        return marker;
      })
    });
  }

  getSpinner () {
    return (
      <div style={{height: `100%`}}>
        <FaSpinner
          style={{
            display: `block`,
            width: `80px`,
            height: `80px`,
            margin: `150px auto`,
            animation: `fa-spin 2s infinite linear`,
          }}
        />
      </div>
    )
  }

  render() {
    return (
      <div style={{height: '500px'}}>
        <MapsGoogleMap
          googleMapURL={c.googleMapUrl}
          loadingElement={this.getSpinner()}
          containerElement={<div style={{height: `100%`}} />}
          mapElement={<div style={{height: `100%`}} />}
          markers={this.state.markers}
          onMarkerClick={this.handleMarkerClick}
          onMarkerClose={this.handleMarkerClose}
        />
      </div>
    );
  }
}
