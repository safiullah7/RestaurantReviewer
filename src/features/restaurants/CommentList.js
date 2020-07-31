import React from "react";
import { Table } from "semantic-ui-react";
import CommentListItem from "./CommentListItem";

const CommentList = ({ ratings }) => {
  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Rating</Table.HeaderCell>
          <Table.HeaderCell>Comment</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      {ratings.map((rating, index) => (
        <CommentListItem key={index} rating={rating} />
      ))}
    </Table>
  );
};

export default CommentList;
