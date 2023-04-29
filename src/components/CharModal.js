import React from "react";

export const CharModal = (props) => {
  const { displayModal, modalPosition, characters, checkIfCharacter } = props;
  const buttonStyle = {
    border: 'none',
    margin: "3px",
    fontSize: '16px'
  }
  return displayModal ? (
    <div
      style={{
        position: "fixed",
        top: modalPosition.y,
        left: window.innerWidth / 2 > modalPosition.x ? modalPosition.x : modalPosition.x - 200,
        backgroundColor: "rgba(0,0,0,0.5)",
        border: 'solid black',
        color: "white",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: '200px'
      }}
    >
      {characters.map((char) => {
        if (!char.found)
          return (
            <button style={buttonStyle} key={char.name} onClick={() => checkIfCharacter(char.name)}>
              {char.name}
            </button>
          );
        return null;
      })}
    </div>
  ) : null;
};
