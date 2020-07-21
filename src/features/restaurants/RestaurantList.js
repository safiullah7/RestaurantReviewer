import React from 'react'
import RestaurantListItem from './RestaurantListItem'

const RestaurantList = ({addReview, restaurants}) => {
    return (
        <>
            {restaurants.map(rest => (
                <RestaurantListItem addReview={addReview} key={`${rest.lat}_${rest.long}`} restuarant={rest} />
            ))}
        </>
    )
}

export default RestaurantList
