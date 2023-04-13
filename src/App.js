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
      width={"70%"}
      src={mainImg}
      alt="smash characters"
      onClick={(e) => handleClick(e)}
    />
  );
  const magImg = (
    <Magnifier
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
  function openModal() {
    setDisplayModal(!displayModal);
  }
  function handleClick(e) {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const coordX = Math.round(((e.clientX - left) / width) * 100);
    const coordY = Math.round(((e.clientY - top) / height) * 100);
    setModalPosition({ x: e.clientX, y: e.clientY });
    openModal();
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
      <CharModal displayModal={displayModal} modalPosition={modalPosition} />
    </div>
  );
}

export default App;
