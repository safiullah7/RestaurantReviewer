import React, { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from "leaflet";
import AddRestaurantModal from './AddRestaurantModal';

const MapDisplayer = ({restaurants, addRestaurant, currentLocation}) => {
    // const position = [31.507341, 74.380161];
    // const [currentLocation, setCurrentLocation] = useState(null);
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [open, setOpen] = useState(false);
    
    const customMarker = new L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [13, 0],
    });
    
    const customMarkerRest = new L.icon({
      iconUrl: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
      iconSize: [25, 41],
      iconAnchor: [13, 0],
    });

    const closeModal = () => {
      setOpen(false);
    }

    const getLatLong = (e) => {
      console.log(e.latlng);
      setLat(e.latlng.lat);
      setLong(e.latlng.lng);
      setOpen(!open)
      // open modal > ask for restaurant.js all props except lat long
      // on save button, push restaurant in restaurants array
      // show it onto the map
    }

    

    // useEffect(() => {
    //   navigator.geolocation.getCurrentPosition(function(location) {
    //     let curLoc = [location.coords.latitude, location.coords.longitude];
    //     // location.coords.accuracy;
    //     setCurrentLocation(curLoc);
    //   });
    // }, [navigator.geolocation.getCurrentPosition])
    return (
      <>
        {
          <AddRestaurantModal lat={lat} long={long} addRestaurant={addRestaurant} open={open} setOpen={setOpen} closeModal={closeModal} />}
        
        {currentLocation && 
          <Map onclick={getLatLong} center={currentLocation} zoom={15} style={{ height: "100vh", width: "75vw"}}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {currentLocation && 
            <Marker position={currentLocation} icon={customMarkerRest}>
              <Popup>
                Your location
              </Popup>
            </Marker>}
            {
            restaurants.map((res, index) => (
              <Marker key={index} position={[res.lat, res.long]} icon={customMarker}>
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
