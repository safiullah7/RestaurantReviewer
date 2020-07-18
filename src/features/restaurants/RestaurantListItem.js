import React from 'react'
import { Item, Label, Icon, Rating } from 'semantic-ui-react'

const RestaurantListItem = ({restuarant}) => {
    return (
        <Item.Group divided>
            <Item>
                <Icon name='food' size='massive' />

            <Item.Content>
                <Item.Header as='a'>{restuarant.restaurantName}</Item.Header>
                <Item.Meta>
                    <span className='cinema'>{restuarant.address}</span>
                </Item.Meta>
                <Item.Description>
                    Average rating: <Rating icon='star' defaultRating={restuarant.getAverageRating()} maxRating={5} />
                </Item.Description>
                {/* <Item.Extra>
                    <Label>IMAX</Label>
                    <Label icon='globe' content='Additional Languages' />
                </Item.Extra> */}
            </Item.Content>
            </Item>
        </Item.Group>
    )
}

export default RestaurantListItem
