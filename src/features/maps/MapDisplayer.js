import React, { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css';
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from "leaflet";

const MapDisplayer = ({restaurants}) => {
    // const position = [31.507341, 74.380161];
    const [currentLocation, setCurrentLocation] = useState(null);
    
    const customMarker = new L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [13, 0],
    });
    const customMarkerRest = new L.icon({
      iconUrl: "../../../public/images/map.svg",
    });

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(function(location) {
        debugger;
        let curLoc = [location.coords.latitude, location.coords.longitude];
        // location.coords.accuracy;
        console.log(curLoc);
        setCurrentLocation(curLoc);
      });
    }, [navigator.geolocation.getCurrentPosition])
    return (
      <>
        {currentLocation && 
          <Map center={currentLocation} zoom={13} style={{ height: "100vh", width: "75vw"}}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {currentLocation && <Marker position={currentLocation} icon={customMarker}>
              <Popup>
                Your location
              </Popup>
            </Marker>}
            {restaurants.map(res => (
              <Marker key={`${res.lat}.${res.long}`} position={[res.lat, res.long]} icon={customMarker}>
                <Popup>
                  {res.restaurantName}
                </Popup>
            </Marker>
            ))}
        </Map>
      }
    </>
    )
}

export default MapDisplayer
