import React from 'react'
import RestaurantListItem from './RestaurantListItem'
import { Segment } from 'semantic-ui-react'

const RestaurantList = ({restaurants}) => {
    return (
        <>
            {restaurants.map(rest => (
                <RestaurantListItem key={`${rest.lat}_${rest.long}`} restuarant={rest} />
            ))}
        </>
    )
}

export default RestaurantList
