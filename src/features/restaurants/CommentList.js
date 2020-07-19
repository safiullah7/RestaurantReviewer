import React from 'react'
import { List, Image } from 'semantic-ui-react'
import CommentListItem from './CommentListItem'

const CommentList = ({ratings}) => {
    return (
        <List relaxed='very'>
            {ratings.map((rating, index) => (
                <CommentListItem key={index} rating={rating} />
            ))}
        </List>
    )
}

export default CommentList
