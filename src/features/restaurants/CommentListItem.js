import React from "react";
import { Rating, Table } from "semantic-ui-react";

const CommentListItem = ({rating}) => {
  return (
    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Rating icon='star' disabled defaultRating={rating.stars} maxRating={5} />
        </Table.Cell>
        <Table.Cell>
          {rating.comment}
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  );
};

export default CommentListItem;
