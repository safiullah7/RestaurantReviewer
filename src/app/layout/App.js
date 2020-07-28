/* global google */
import React, { useState, useEffect } from 'react';
import './App.css';
import { Grid, Segment } from 'semantic-ui-react';
import Restaurant from '../models/restaurant.js';
import jsonData from '../models/external.json';
import RestaurantList from '../../features/restaurants/RestaurantList';
import MapDisplayer from '../../features/maps/MapDisplayer';
import Filter from '../../features/filter/Filter';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [open, setOpen] = useState(false);
  const [body, setBody] = useState(null);
  const [count, setCount] = useState(0);
  const [minRating, setMinRating] = useState('');
  const [maxRating, setMaxRating] = useState('');
  const [detailsView, setDetailsView] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [file, setFile] = useState(false);
  const [map, setMap] = useState(null);

  const addReview = (updatedRestaurant, review) => {
    // setRestaurants(restaurants);
  }

  const addRestaurant = (restaurant) => {
    let rests = restaurants;
    rests.push(restaurant)
    setRestaurants(rests);
    filterRestaurants();
    setCount(count + 1);
  }

  const filterRestaurants = () => {
    debugger;
    const fRests = restaurants.filter(res => res.avgRating >= minRating && res.avgRating <= maxRating);
    setFilteredRestaurants(fRests);
  }

  const googlePlacesNearMe = () => {
    if (currentLocation != null) {
      var pyrmont = new google.maps.LatLng(currentLocation[0], currentLocation[1]);
      let map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 15
      });
      setMap(map);
      
      var request = {
        location: pyrmont,
        radius: '500',
        type: ['restaurant']
      };
      const service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, callback);
    }
  }

  const callback = (results, status) => {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      let rests = [];
      for (var i = 0; i < results.length; i++) {
        let r = new Restaurant(results[i].name, results[i].vicinity, results[i].geometry.location.lat(), 
          results[i].geometry.location.lng(), [], results[i].rating, results[i].place_id);
        rests.push(r);
      }
      setRestaurants(rests);
      setFilteredRestaurants(rests);
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(location) {
      let curLoc = [location.coords.latitude, location.coords.longitude];
      // location.coords.accuracy;
      setCurrentLocation(curLoc);
    });
  }, [navigator.geolocation.getCurrentPosition])

  useEffect(() => {
    let rests = [];
    if (restaurants.length === 0) {
      if (file) {
        jsonData.map((res) => {
          let r = new Restaurant(res.restaurantName, res.address, res.lat, res.long, res.ratings);
          r.getAverageRating();
          rests.push(r);
        });
        setRestaurants(rests);
        setFilteredRestaurants(rests);
        console.log(filteredRestaurants);
      }
      else
        googlePlacesNearMe();
      
    }
  }, [jsonData, count, file, googlePlacesNearMe, restaurants.length, filterRestaurants, filteredRestaurants])

  return (
    <div className="App">
      <header className="App-header">
        Restaurant Reviewer
      </header>
      {/* AIzaSyCWlhjBQDtztfsfYBMFBhhe7fq4ss81HFw */}
      <Grid>
        <Grid.Column width={12}>
          <MapDisplayer 
            restaurants={filteredRestaurants} 
            addRestaurant={addRestaurant}
            currentLocation={currentLocation} />
        </Grid.Column>

        <Grid.Column width={4}>
          {
            !detailsView && 
              <Filter 
                minRating={minRating} setMinRating={setMinRating} 
                maxRating={maxRating} setMaxRating={setMaxRating} 
                filterRestaurants={filterRestaurants} 
              />
          }
          
          {
            filteredRestaurants && 
              <RestaurantList 
                addReview={addReview} 
                restaurants={filteredRestaurants} 
                setDetailsView={setDetailsView} 
                map={map}
                file={file}
              />
          }
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
