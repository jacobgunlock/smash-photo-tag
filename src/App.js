import characterLocation from "./characterLocation";
import { useEffect, useState } from "react";
import { CharModal } from "./components/CharModal";
import { Message } from "./components/Message";
import { Header } from "./components/Header";
import WinScreen from "./components/WinScreen";
import { NonMagImg } from "./components/NonMagImg";
import { MagImg } from "./components/MagImg";
import "./main.css";

function App() {
  const [isGameover, setIsGameover] = useState(false);
  const [timer, setTimer] = useState({
    seconds: 0,
    active: true,
  });
  const [isMagnified, setIsMagnified] = useState(true);
  const [displayModal, setDisplayModal] = useState(false);
  const [modalPosition, setModalPosition] = useState("");
  const [characters, setCharacters] = useState(getRandomChars());
  const [message, setMessage] = useState({
    text: "Not quite!",
    active: false,
  });
  
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
              name: `✔ You found ${character}`,
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

  function resetGame() {
    setCharacters(getRandomChars());
    setIsGameover(false);
    setTimer({
      active: true,
      seconds: 0,
    });
  }

  useEffect(() => {
    let timer;
    if (message.active) {
      timer = setTimeout(() => {
        setMessage({
          text: "Not quite!",
          active: false,
        });
      }, 1000);
    }
    if (displayModal && message.active)
      setMessage({ ...message, active: false });
    return () => clearTimeout(timer);
  }, [message, displayModal]);

  useEffect(() => {
    if (characters.every((char) => char.found === true)) {
      setIsGameover(true);
      setTimer((prev) => ({
        ...prev,
        active: false,
      }));
    }
  }, [characters]);

  useEffect(() => {
    let interval;
    if (timer.active) {
      interval = setInterval(() => {
        setTimer((prev) => ({
          ...prev,
          seconds: prev.seconds + 1,
        }));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="App">
      <Header
        isMagnified={isMagnified}
        setIsMagnified={setIsMagnified}
        characters={characters}
        timer={timer}
      />
      {isGameover ? (
        <WinScreen resetGame={resetGame} timer={timer} />
      ) : (
        <div className="main">
          {isMagnified ? (
            <MagImg handleClick={handleClick} />
          ) : (
            <NonMagImg handleClick={handleClick} />
          )}
        </div>
      )}
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
