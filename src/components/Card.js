import React from "react";
import "./Card.css";

const Card = ({ post, removePost }) => {
  return (
    <div className="card">
      <button className="remove-btn" onClick={() => removePost(post.id)}>
        X
      </button>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <img src="./task.avif" />
    </div>
  );
};

export default Card;
