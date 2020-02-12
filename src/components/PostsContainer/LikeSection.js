import React from "react";

const LikeSection = props => {
  console.log(props, "otoo");
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div
          className="like-section-wrapper"
          onClick={() => {
            props.likeInc(props.numLikes + 1);
          }}
        >
          <i className="far fa-heart" />
        </div>
        <div className="like-section-wrapper">
          <i className="far fa-comment" />
        </div>
      </div>
      <p className="like-number">{props.numLikes} likes</p>
    </div>
  );
};

export default LikeSection;
