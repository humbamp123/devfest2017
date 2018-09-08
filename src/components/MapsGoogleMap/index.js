// /* eslint-disable no-undef */

// import { default as React, } from "react";
// import { withGoogleMap, GoogleMap, InfoWindow, Marker } from "react-google-maps";
// // import withScriptjs from "react-google-maps/lib/async/withScriptjs";
// import _ from "lodash";

// const MapsGoogleMap = _.flowRight(withScriptjs, withGoogleMap)(props => {
//   const { onMarkerClose, onMarkerClick, onMapLoad, markers } = props

//   return (
//     <GoogleMap ref={onMapLoad} defaultZoom={9} defaultCenter={{lat: 37.75, lng: -122.240980}}>
//       {markers.map((marker, index) => (
//         <Marker key={index} position={marker.position} onClick={() => onMarkerClick(marker)}>
//           {marker.showInfo &&
//             <InfoWindow onCloseClick={() => onMarkerClose(marker)}>
//               <div>{marker.infoContent}</div>
//             </InfoWindow>
//           }
//         </Marker>
//       ))}
//     </GoogleMap>
//   )
// })

// export default MapsGoogleMap
