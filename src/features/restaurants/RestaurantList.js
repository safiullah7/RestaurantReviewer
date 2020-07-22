import React, { useState } from 'react'
import RestaurantListItem from './RestaurantListItem'
import RestaurantListItemDetails from './RestaurantListItemDetails';

const RestaurantList = ({addReview, restaurants}) => {
  const [clicked, setClicked] = useState(false);
  const [restaurant, setRestaurant] = useState(null);

  const handleClick = (restaurant) => {
      debugger;
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
                        setClicked={setClicked} />)
            }
        </>
    )
}

export default RestaurantList
