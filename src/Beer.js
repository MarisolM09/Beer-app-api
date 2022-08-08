import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export function Beer(props) {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <li>
        <h3>{props.name}</h3>
        <img className="image" alt={props.name} src={props.image} />
        <button onClick={handleClick}>Like</button>
        {isLiked && <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />}
      </li>
    </div>
  );
}

export default Beer;
