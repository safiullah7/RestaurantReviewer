/* global google */
import React, { useState, Fragment, useEffect, useCallback } from "react";
import {
  Segment,
  Item,
  Form,
  Label,
  Rating,
  Button,
  Image,
  Header,
  Divider,
  Grid,
  List,
  TextArea,
} from "semantic-ui-react";
import CommentList from "./CommentList";

const RestaurantListItemDetails = ({
  addReview,
  restaurant,
  setClicked,
  setDetailsView,
  map,
  file
}) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [avgRating, setAvgRating] = useState(restaurant.avgRating);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    const review = { stars: rating, comment: comment };
    restaurant.ratings.push(review);
    addReview(restaurant, review);
    setAvgRating(restaurant.getAverageRating());
    setComment("");
    setRating(0);
  };

  const handleBack = () => {
    setClicked(false);
    setDetailsView(false);
  };

  const callback = useCallback((place, status) => {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      //console.log(place);
      restaurant.totalRatings = place.user_ratings_total;
      restaurant.ratings = place.reviews && place.reviews.map(review => {
        return {
          stars: review.rating,
          comment: review.text
        };
      })
      console.log(restaurant.ratings);
      setLoading(false);
    }
  }, [restaurant.ratings, restaurant.totalRatings, setLoading])

  useEffect(() => {
    setDetailsView(true);
    if (!file && restaurant.ratings && restaurant.ratings.length === 0) {
      setLoading(true);
      const request = {
        placeId: restaurant.placeId,
        // fields: ["name", "rating", "formatted_phone_number", "geometry"],
      };
      const service = new google.maps.places.PlacesService(map);
      service.getDetails(request, callback);
    }
  }, [setDetailsView, file, map, restaurant, callback, loading]);

  return (
    <div>
      <Button
        labelPosition="left"
        icon="left chevron"
        content="Back"
        onClick={handleBack}
      />

      
      <Header as="h3" block>
        {restaurant.restaurantName}
      </Header>
      <List>
        <List.Item>
          <List.Content>
            <Label
              basic
              color="orange"
              content={`${restaurant.lat}, ${restaurant.long}`}
            />
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <Label basic color="teal" content={restaurant.address} />
          </List.Content>
        </List.Item>
      </List>
      <Header as="h3">
        Average Rating:{" "}
        <Rating
          icon="star"
          size="huge"
          rating={avgRating}
          maxRating={5}
          disabled
        />
      </Header>
      <Image
        centered
        src={`https://maps.googleapis.com/maps/api/streetview?size=300x250&location=${restaurant.lat},${restaurant.long}&fov=80&heading=70&pitch=0&key=AIzaSyC80Tpcm6kMo_grb40sb5oVkj6uubE20ms`}
        size="medium"
        disabled
      />

      <Divider />

      {
        loading ? <p>Loading</p>
        :
        restaurant.ratings && restaurant.ratings.length > 0 ? 
          <CommentList ratings={restaurant.ratings} />
          :
          <p>No ratings available</p>
      }
      <Divider />
      <Header as="h3" block>
        Leave your Review
      </Header>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Field>
            <Label style={{ right: "8em" }} pointing="below">
              Comment
            </Label>
            <TextArea
              placeholder="Comment"
              onChange={(e, { name, value }) => setComment(value)}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Item.Extra>
            <Label style={{ margin: "5px" }} pointing="right">
              Rating
            </Label>
            <Rating
              icon="star"
              size="huge"
              rating={rating}
              maxRating={5}
              onRate={(e, { rating, maxRating }) => setRating(rating)}
            />
          </Item.Extra>
        </Form.Group>
        <Form.Group>
          <Form.Button fluid positive content="Add Review" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default RestaurantListItemDetails;
