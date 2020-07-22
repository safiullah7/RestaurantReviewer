import React, { useState } from 'react'
import RestaurantListItem from './RestaurantListItem'
import RestaurantListItemDetails from './RestaurantListItemDetails';
import { Divider } from 'semantic-ui-react';

const RestaurantList = ({addReview, restaurants, setDetailsView}) => {
  const [clicked, setClicked] = useState(false);
  const [restaurant, setRestaurant] = useState(null);

  const handleClick = (restaurant) => {
    setClicked(!clicked);
    
    setRestaurant(restaurant);
  };

    return (
        <>
            {
                !clicked ? restaurants.map(rest => (
                    <RestaurantListItem 
                        key={`${rest.lat}_${rest.long}`} 
                        setSelectedRestaurant={setRestaurant} 
                        handleClick={handleClick} 
                        restuarant={rest} />
                ))
                :   clicked && restaurant && 
                    (<RestaurantListItemDetails 
                        addReview={addReview} 
                        restaurant={restaurant}
                        setClicked={setClicked}
                        setDetailsView={setDetailsView} />)
            }
        </>
    )
}

export default RestaurantList
