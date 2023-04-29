import React from "react";

export const Message = (props) => {
  const { message, modalPosition } = props;
  return (
    message.active && (
      <div
        style={{
          position: "fixed",
          top: modalPosition.y,
          left: window.innerWidth / 2 > modalPosition.x ? modalPosition.x : modalPosition.x - 200,
          backgroundColor: "black",
          color: "white",
          padding: "10px",
        }}
      >
        {message.text}
      </div>
    )
  );
};
