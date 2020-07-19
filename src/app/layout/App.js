import React, { useState, useEffect } from 'react';
import './App.css';
import { Grid, Segment } from 'semantic-ui-react';
import Restaurant from '../models/restaurant.js';
import jsonData from '../models/external.json';
import RestaurantList from '../../features/restaurants/RestaurantList';
import MapDisplayer from '../../features/maps/MapDisplayer';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const addReview = (updatedRestaurant) => {
    const rests = restaurants.filter(rest => rest.restaurantName !== updatedRestaurant.restaurantName && 
          rest.address !== updatedRestaurant.address && rest.lat !== updatedRestaurant.lat && rest.long !== updatedRestaurant.long);
    rests.push(updatedRestaurant);
    setRestaurants(rests);
  }

  useEffect(() => {
    let rests = [];
    jsonData.map((res) => {
      let r = new Restaurant(res.restaurantName, res.address, res.lat, res.long, res.ratings);
      rests.push(r);
    });
    setRestaurants(rests);
  }, [jsonData])

  return (
    <div className="App">
      <header className="App-header">
        Restaurant Reviewer
      </header>
      {/* AIzaSyCWlhjBQDtztfsfYBMFBhhe7fq4ss81HFw */}
      <Grid>
        <Grid.Column width={12}>
          <MapDisplayer restaurants={restaurants} />
        </Grid.Column>
        <Grid.Column width={4}>
          <Segment>
            {restaurants && <RestaurantList addReview={addReview} restaurants={restaurants} />}
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
