import React, { useState } from 'react'
import RestaurantListItem from './RestaurantListItem'
import RestaurantListItemDetails from './RestaurantListItemDetails';

const RestaurantList = ({addReview, restaurants, setDetailsView, map, file}) => {
  const [clicked, setClicked] = useState(false);
  const [restaurant, setRestaurant] = useState(null);

  const handleClick = (restaurant) => { 
    setClicked(!clicked);
    
    setRestaurant(restaurant);
  };

    return (
        <>
            <div style={!clicked ? { marginTop: '1em', overflow: 'auto', maxHeight: '85vh' } : { marginTop: '1em', overflow: 'auto', maxHeight: '100vh' }}>
            {
                !clicked ? restaurants.map((rest, index) => (
                    <RestaurantListItem 
                        key={index}
                        setSelectedRestaurant={setRestaurant}
                        handleClick={handleClick}
                        restuarant={rest}
                    />
                ))
                :   (clicked && restaurant) && 
                    (
                        <RestaurantListItemDetails
                            addReview={addReview} 
                            restaurant={restaurant}
                            setClicked={setClicked}
                            setDetailsView={setDetailsView}
                            map={map}
                            file={file}
                        />
                    )
            }
            </div>
        </>
    )
}

export default RestaurantList
