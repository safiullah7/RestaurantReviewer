import React from "react";
import { List, Image, Rating } from "semantic-ui-react";

const CommentListItem = ({rating}) => {
  return (
    <List.Item>
      <Image avatar src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" />
      <List.Content>
        <List.Header as="a">Someone</List.Header>
        <List.Description>
          {rating.comment}
        </List.Description>
        <Rating icon='star' disabled defaultRating={rating.stars} maxRating={5} />
      </List.Content>
    </List.Item>
  );
};

export default CommentListItem;
