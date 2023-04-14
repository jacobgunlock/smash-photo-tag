import React from "react";

export const CharModal = (props) => {
  const { displayModal, modalPosition, characters, checkIfCharacter } = props;

  return displayModal ? (
    <div
      style={{
        position: "fixed",
        top: modalPosition.y,
        left: modalPosition.x,
        backgroundColor: "black",
        color: 'white',
        padding: "10px"
      }}
    >
      <div>
        {characters.map((char) => {
          return <button onClick={() => checkIfCharacter(char)}>{char}</button>;
        })}
      </div>
    </div>
  ) : null;
};
