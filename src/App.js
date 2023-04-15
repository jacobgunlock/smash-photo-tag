import mainImg from "./assets/smash-photo-tag.jpg";
import characterLocation from "./characterLocation";
import Magnifier from "react-magnifier";
import { useEffect, useState } from "react";
import { CharModal } from "./components/CharModal";
import { Message } from "./components/Message";

function App() {
  const [isMagnified, setIsMagnified] = useState(true);
  const [displayModal, setDisplayModal] = useState(false);
  const [modalPosition, setModalPosition] = useState("");
  const [characters, setCharacters] = useState(getRandomChars());
  const [message, setMessage] = useState({
    text: "Not quite!",
    active: false,
  });

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

  function toggleModal() {
    setDisplayModal(!displayModal);
  }

  function checkIfCharacter(character) {
    const { left, top, width, height } = document
      .getElementById("main-photo")
      .getBoundingClientRect();
    const coordX = Math.round(((modalPosition.x - left) / width) * 100);
    const coordY = Math.round(((modalPosition.y - top) / height) * 100);

    characters.forEach((char) => {
      const absX = Math.abs(char.x - coordX);
      const absY = Math.abs(char.y - coordY);
      if (absX <= 5 && absY <= 5 && char.name === character) {
        const charCheck = characters.map((i) => {
          if (i.name === character) {
            return {
              ...i,
              name: `You found ${character}`,
              found: true,
            };
          }
          return i;
        });
        for (let i = 0; i < charCheck.length; i++) {
          if (charCheck[i].name !== characters[i].name) {
            setMessage({
              text: `You found ${character}`,
            });
            break;
          }
        }
        setCharacters(charCheck);
      }
    });
    setMessage((prev) => ({
      ...prev,
      active: true,
    }));
    toggleModal();
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
      result.push({
        name: characters[randomIndex].name,
        found: false,
        x: characters[randomIndex].X,
        y: characters[randomIndex].Y,
      });
      characters.splice(randomIndex, 1);
    }
    return result;
  }

  useEffect(() => {
    let timer;
    if (message.active) {
      timer = setTimeout(() => {
        setMessage({
          text: "Not quite!",
          active: false,
        });
      }, 2000);
    }
    if (displayModal && message.active) setMessage({ ...message, active: false });
    return () => clearTimeout(timer);
  }, [message, displayModal]);

  return (
    <div className="App">
      {isMagnified ? magImg : nonMagImg}
      <button onClick={() => setIsMagnified(!isMagnified)}>toggle mag</button>
      <ul>
        {characters.map((item) => {
          return (
            <li key={item.name} style={item.found ? { color: "green" } : null}>
              {item.name}
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
      <Message message={message} modalPosition={modalPosition} />
    </div>
  );
}

export default App;
