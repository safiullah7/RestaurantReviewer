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
  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(0);
  const [detailsView, setDetailsView] = useState(false);

  const addReview = (updatedRestaurant, review) => {
    // setRestaurants(restaurants);
    const restaurant = restaurants.filter(res => res.restaurantName === updatedRestaurant.updatedRestaurant 
          && res.lat === updatedRestaurant.lat && res.long === updatedRestaurant.long
          && res.address === updatedRestaurant.address);
    restaurant.ratings.push(review);
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

  const closeModal = () => {
    setOpen(false);
  }

  useEffect(() => {
    let rests = [];
    if (restaurants.length === 0) {
      jsonData.map((res) => {
        let r = new Restaurant(res.restaurantName, res.address, res.lat, res.long, res.ratings);
        r.getAverageRating();
        rests.push(r);
      });
      setRestaurants(rests);
      setFilteredRestaurants(rests);
    }
  }, [jsonData, count])

  return (
    <div className="App">
      <header className="App-header">
        Restaurant Reviewer
      </header>
      {/* AIzaSyCWlhjBQDtztfsfYBMFBhhe7fq4ss81HFw */}
      <Grid>
        <Grid.Column width={12}>
          <MapDisplayer restaurants={filteredRestaurants} addRestaurant={addRestaurant} setOpen={setOpen} setBody={setBody} />
        </Grid.Column>
        <Grid.Column width={4}>
          {!detailsView && 
            <Filter 
              minRating={minRating} setMinRating={setMinRating} 
              maxRating={maxRating} setMaxRating={setMaxRating} 
              filterRestaurants={filterRestaurants} />}
          
          {filteredRestaurants && 
            <RestaurantList addReview={addReview} restaurants={filteredRestaurants} setDetailsView={setDetailsView} />}
          
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
