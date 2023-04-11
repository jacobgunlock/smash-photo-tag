import mainImg from "./assets/smash-photo-tag.jpg";
import characterLocation from "./characterLocation";
import Magnifier from "react-magnifier";
import { useState } from "react";

function App() {
  const [isMagnified, setIsMagnified] = useState(true);
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
      style={{cursor: 'default'}}
    />
  );
  function handleClick(e) {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const coordX = Math.round(((e.clientX - left) / width) * 100);
    const coordY = Math.round(((e.clientY - top) / height) * 100);
    characterLocation.forEach((char) => {
      const absX = Math.abs(char.X - coordX);
      const absY = Math.abs(char.Y - coordY);

      if (absX <= 5 && absY <= 5) {
        characters.forEach((item) => {
          if (item === char.name) {
            console.log(characters);
            const name = document.getElementById(item)
            name.innerText = `${item} found!`
            name.style.color = 'green';
          };
        });
      }
    });
  }
  function getRandomChars() {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * characterLocation.length);
      result.push(characterLocation[randomIndex].name);
    }
    return result;
  }

  return (
    <div className="App">
      {isMagnified ? magImg : nonMagImg}
      <button onClick={() => setIsMagnified(!isMagnified)}>change</button>
      <ul>
        {characters.map((item) => {
          return <li key={item} id={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
