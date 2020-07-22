import React, { useState, Fragment, useEffect } from "react";
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

const RestaurantListItemDetails = ({ addReview, restaurant, setClicked, setDetailsView }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [avgRating, setAvgRating] = useState(restaurant.avgRating);
  // setDetailsView(true);

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

  useEffect(() => {
    setDetailsView(true);
  }, [setDetailsView])

  return (
    <div style={{ marginTop: '1em', overflow: 'auto', maxHeight: '100vh' }}>
      <Button
        
        labelPosition="left"
        icon="left chevron"
        content="Back"
        onClick={handleBack}
      />

      {/* TODO */}
      {/* <Item.Image
          src={`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${restaurant.lat},${restaurant.long}&fov=80&heading=70&pitch=0&key=AIzaSyCWlhjBQDtztfsfYBMFBhhe7fq4ss81HFw&signature=safi`}
        /> */}
      <Header as="h3" block>
        {restaurant.restaurantName}
      </Header>
      <List>
        <List.Item>
          <List.Content>
              <Label
                    basic
                    color='orange'
                    content={`${restaurant.lat}, ${restaurant.long}`}
                  />
            </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <Label
                basic
                color='teal'
                content={restaurant.address}
            />
          </List.Content>
        </List.Item>
      </List>
      <Header as="h3">
        Average Rating: <Rating
              icon="star"
              size='huge'
              rating={avgRating}
              maxRating={5}
              disabled
            />
      </Header>
      <Image
        centered
        src="https://react.semantic-ui.com/images/wireframe/image.png"
        size="medium"
        disabled
      />

      <Divider />
      

      <CommentList ratings={restaurant.ratings} />
      <Divider />
      <Header as="h3" block>
        Leave your Review
      </Header>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Field>
                <Label style={{ right: "8em" }} pointing="below">Comment</Label>
                <TextArea
                    
                    placeholder="Comment"
                    onChange={(e, { name, value }) => setComment(value)}
                    />
            </Form.Field>
        </Form.Group>
        <Form.Group>
          <Item.Extra>
          <Label style={{ margin: "5px" }} pointing="right">Rating</Label>
            <Rating
              icon="star"
              size='huge'
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
