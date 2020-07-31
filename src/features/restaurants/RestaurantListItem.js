import React from "react";
import {
  Item,
  Icon,
  Rating,
  Divider,
} from "semantic-ui-react";

const RestaurantListItem = ({ setSelectedRestaurant, handleClick, restuarant }) => {

  const handleClick1 = () => {
    handleClick(restuarant);
  }

  
  return (
    <div style={{margin: '1em'}}>
      <Item.Group divided>
        <Item>
          <Icon name="food" size="massive" />
          
          <Item.Content>
            <Item.Header onClick={handleClick1} as="a">
              {restuarant.restaurantName}
            </Item.Header>
            <Item.Meta>
              <span className="cinema">{restuarant.address}</span>
            </Item.Meta>
            <Item.Description>
              Average rating:{" "}
              <Rating
                icon="star"
                disabled
                rating={restuarant.avgRating}
                maxRating={5}
              />
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
      <Divider />
    </div>
  );
};

export default RestaurantListItem;
