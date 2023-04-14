import mainImg from "./assets/smash-photo-tag.jpg";
import characterLocation from "./characterLocation";
import Magnifier from "react-magnifier";
import { useState } from "react";
import { CharModal } from "./components/CharModal";

function App() {
  const [isMagnified, setIsMagnified] = useState(true);
  const [displayModal, setDisplayModal] = useState(false);
  const [modalPosition, setModalPosition] = useState("");
  const [characters, setCharacters] = useState(getRandomChars());

  const nonMagImg = (
    <img
      id="main-photo"
      width={"70%"}
      src={mainImg}
      alt="smash characters"
      onClick={(e) => handleClick(e)}
    />
  );
  const magImg = (
    <Magnifier
      id="main-photo"
      width={"70%"}
      mgShowOverflow={false}
      mgHeight={200}
      mgWidth={200}
      zoomFactor={1}
      src={mainImg}
      alt="smash characters"
      onClick={(e) => handleClick(e)}
      style={{ cursor: "default" }}
    />
  );

  function toggleModal(e) {
    setDisplayModal(!displayModal);
  }

  function checkIfCharacter(character) {
    const { left, top, width, height } = document
      .getElementById("main-photo")
      .getBoundingClientRect();
    const coordX = Math.round(((modalPosition.x - left) / width) * 100);
    const coordY = Math.round(((modalPosition.y - top) / height) * 100);
    characterLocation.forEach((char) => {
      const absX = Math.abs(char.X - coordX);
      const absY = Math.abs(char.Y - coordY);
      if (absX <= 5 && absY <= 5) {
        setCharacters((prevChars) =>
          prevChars.map((item) =>
            item === char.name ? `${item} found!` : item
          )
        );
      }
    });
  }

  function handleClick(e) {
    setModalPosition({ x: e.clientX, y: e.clientY });
    toggleModal(e);
  }

  function getRandomChars() {
    const result = [];
    const characters = [...characterLocation];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result.push(characters[randomIndex].name);
      characters.splice(randomIndex, 1);
    }
    return result;
  }

  return (
    <div className="App">
      {isMagnified ? magImg : nonMagImg}
      <button onClick={() => setIsMagnified(!isMagnified)}>toggle mag</button>
      <ul>
        {characters.map((item) => {
          return (
            <li key={item} id={item}>
              {item}
            </li>
          );
        })}
      </ul>
      <CharModal
        displayModal={displayModal}
        modalPosition={modalPosition}
        characters={characters}
        checkIfCharacter={checkIfCharacter}
      />
    </div>
  );
}

export default App;
