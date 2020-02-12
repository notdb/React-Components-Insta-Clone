// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comment, addComment] = useState(props.comments);
  console.log(props.comments, "ARSTNEARt");

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {props.comments.map(comment => {
        return <Comment comment={comment} />;
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
