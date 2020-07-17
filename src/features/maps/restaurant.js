import React, { useState, useEffect } from 'react'
import * as externalData from '../../app/models/external.json';
import {GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';

const Restaurant = () => {
    const libraries = ["places"];
    const mapContainerStyle = {
        width: "60vw",
        height: "60vh"
    };
    const center = {
        lat: 43653225,
        lng: -79.383186
    };
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyCap29PzBFF-SfSbn2rl9JhrhzscWg4Zm8",
        libraries
    });
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps";

    return <div>
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center}>

        </GoogleMap>
    </div>
}

export default Restaurant
