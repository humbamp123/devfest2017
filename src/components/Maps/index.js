/* eslint-disable no-undef */
import { default as React, Component, } from "react";
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import FaSpinner from "react-icons/lib/fa/spinner";
import _ from "lodash";

const MapsGoogleMap = _.flowRight(
  withScriptjs,
  withGoogleMap,
  )(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={9}
    defaultCenter={{ lat: 37.75, lng: -122.240980 }}
    >
    {props.markers.map((marker, index) => (
      <Marker
        key={index}
        position={marker.position}
        onClick={() => props.onMarkerClick(marker)}
      >
        {marker.showInfo && (
          <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
            <div>{marker.infoContent}</div>
          </InfoWindow>
        )}
      </Marker>
    ))}
  </GoogleMap>
));

export default class Maps extends Component {
  state = {
    markers: [{
      position: {
        lat: this.props.lat,
        lng: this.props.lng, 
      },
      showInfo: true,
      infoContent: (
        <div>
          <h1>{this.props.eventLocation}</h1>
          <p>{this.props.eventDescription}</p>
          <a href={this.props.directions}>Directions</a>
        </div>
      ),
      key: this.props.key,
      defaultAnimation: 2,
    }],
  }

  handleMapLoad = this.handleMapLoad.bind(this);

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log('cool');
    }
  }


  handleMarkerClick = this.handleMarkerClick.bind(this);
  handleMarkerClose = this.handleMarkerClose.bind(this);

  // Toggle to 'true' to show InfoWindow and re-renders component
  handleMarkerClick(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true,
          };
        }
        return marker;
      }),
    });
  }

  handleMarkerClose(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false,
          };
        }
        return marker;
      }),
    });
  }

  render() {
    return (
        <div className={classNames('hero')}>
          <div className={classNames('hero-body')}>
            <div style={{ height: '400px'}}>
              <MapsGoogleMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places,geometry&key=AIzaSyCzoefHFDKC6sQ12YqbgMtAB9x85YlMp_0"
                loadingElement={
                  <div style={{ height: `100%` }}>
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
                }
                containerElement={
                  <div style={{ height: `100%` }} />
                }
                mapElement={
                  <div style={{ height: `100%` }} />
                }
                markers={this.state.markers}
                onMarkerClick={this.handleMarkerClick}
                onMarkerClose={this.handleMarkerClose}
              />
            </div>
          </div>
        </div>
    );
  }
}
