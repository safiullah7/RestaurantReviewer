import React, { useState } from "react";
import {
  Item,
  Label,
  Icon,
  Rating,
  Segment,
  Button,
  TextArea,
  Form,
} from "semantic-ui-react";
import CommentList from "./CommentList";

const RestaurantListItem = ({ addReview, restuarant }) => {
  const [clicked, setClicked] = useState(false);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleSubmit = () => {
    const review = {"stars": rating, "comment": comment};
    restuarant.ratings.push(review);
    addReview(restuarant);
    setComment('');
    setRating(0);
  };
  return (
    <Item.Group divided>
      <Item>
        <Icon name="food" size="massive" />
        {/* <Item.Image src={`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${restuarant.lat},${restuarant.long}&fov=80&heading=70&pitch=0&key=AIzaSyCWlhjBQDtztfsfYBMFBhhe7fq4ss81HFw&signature=safi`} /> */}

        <Item.Content>
          <Item.Header onClick={handleClick} as="a">
            {restuarant.restaurantName}
          </Item.Header>
          <Item.Meta>
            <span className="cinema">{restuarant.address}</span>
          </Item.Meta>
          <Item.Description>
            Average rating:{" "}
            <Rating
              icon="star"
              defaultRating={restuarant.getAverageRating()}
              maxRating={5}
            />
          </Item.Description>
          {clicked && (
            <>
              <Segment>
                <Item.Image
                  src={`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${restuarant.lat},${restuarant.long}&fov=80&heading=70&pitch=0&key=AIzaSyCWlhjBQDtztfsfYBMFBhhe7fq4ss81HFw&signature=safi`}
                />
                <CommentList ratings={restuarant.ratings} />
                <Segment>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group>
                      <Item.Extra>
                        <Label icon="globe" content="Leave your Review" />
                      </Item.Extra>
                    </Form.Group>
                    <Form.Group>
                    <Item.Extra>
                      <Form.Input
                        placeholder="Comment"
                        name="comment"
                        value={comment}
                        onChange={(e, { name, value }) => setComment(value)}
                      />
                      </Item.Extra>
                    </Form.Group>
                    <Form.Group>
                    <Item.Extra>
                      <Rating
                        icon='star'
                        defaultRating={rating}
                        maxRating={5}
                        onRate={(e, { rating, maxRating }) => setRating(rating)}
                      />
                      </Item.Extra>
                    </Form.Group>
                    <Form.Group>
                      <Form.Button fluid positive content="Add Review" />
                    </Form.Group>
                  </Form>
                </Segment>
              </Segment>
            </>
          )}
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

export default RestaurantListItem;
