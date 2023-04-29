import React from 'react'
import Magnifier from "react-magnifier";
import mainImg from "../assets/smash-photo-tag.jpg";



export const MagImg = (props) => {
  return (
    <Magnifier
      id="main-photo"
      mgShowOverflow={false}
      mgHeight={200}
      mgWidth={200}
      zoomFactor={1}
      src={mainImg}
      alt="smash characters"
      onClick={(e) => props.handleClick(e)}
      style={{ cursor: "default", maxWidth: "1000px" }}
    />
  )
}
