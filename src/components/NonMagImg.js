import React from "react";
import mainImg from "../assets/smash-photo-tag.jpg";


export const NonMagImg = (props) => {
  return (
    <img
      id="main-photo"
      src={mainImg}
      alt="smash characters"
      onClick={(e) => props.handleClick(e)}
      style={{ maxWidth: "1000px" }}
    />
  );
};
