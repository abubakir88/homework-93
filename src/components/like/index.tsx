import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
// import "./LikeButton.css";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <button className="like-button" onClick={handleClick}>
      <FaHeart
        className="heart-icon"
        color={liked ? "red" : "rgb(252, 174, 174)"}
        size={20}
      />
    </button>
  );
}

export default LikeButton;
