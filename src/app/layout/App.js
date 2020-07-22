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
  const [open, setOpen] = useState(false);
  const [body, setBody] = useState(null);
  const [count, setCount] = useState(0);

  const addReview = (updatedRestaurant) => {
    // setRestaurants(restaurants);
  }

  const addRestaurant = (restaurant) => {
    debugger;
    let rests = restaurants;
    rests.push(restaurant)
    setRestaurants(rests);
    setCount(count + 1);
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
          <MapDisplayer restaurants={restaurants} addRestaurant={addRestaurant} setOpen={setOpen} setBody={setBody} />
        </Grid.Column>
        <Grid.Column width={4}>
            {restaurants && <RestaurantList addReview={addReview} restaurants={restaurants} />}
          
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
