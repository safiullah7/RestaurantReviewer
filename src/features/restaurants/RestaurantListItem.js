import React, { useState } from "react";
import {
  Item,
  Label,
  Icon,
  Rating,
  Segment,
  Form,
  Divider,
} from "semantic-ui-react";
import CommentList from "./CommentList";

const RestaurantListItem = ({ setSelectedRestaurant, handleClick, restuarant }) => {

  const handleClick1 = () => {
    handleClick(restuarant);
  }

  
  return (
    <div style={{margin: '1em'}}>
      <Item.Group divided>
        <Item>
          <Icon name="food" size="massive" />
          {/* <Item.Image src={`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${restuarant.lat},${restuarant.long}&fov=80&heading=70&pitch=0&key=AIzaSyCWlhjBQDtztfsfYBMFBhhe7fq4ss81HFw&signature=safi`} /> */}

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
