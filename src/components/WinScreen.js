import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  orderBy,
  query,
  limit,
  doc,
  setDoc,
} from "firebase/firestore";

const WinScreen = (props) => {
  const styling = {
    color: "white",
    height: "100vh",
    minHeight: "800px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const [leaderboard, setLeaderboard] = useState([]);
  const [initialized, setInitialized] = useState(false);

  async function getLeaderboard(db) {
    const leaderboard = collection(db, "leaderboard");
    const q = query(leaderboard, orderBy("time", "asc"), limit(10));
    const leaderboardSnapshot = await getDocs(q);
    const list = leaderboardSnapshot.docs.map((doc) => doc.data());
    return list;
  }

  async function addNewScore() {
    const leaderboard = collection(db, "leaderboard");
    let name = "";
    while (name === "" || name === null || name.length > 10) {
      name = prompt(
        `You got a new highscore! \n Please enter your name. \n [10 char limit]`
      );
    }
    console.log(name);
    await setDoc(doc(leaderboard), {
      name: name,
      time: props.timer.ms.toFixed(1) / 10,
    });
    const list = await getLeaderboard(db);
    setLeaderboard(list);
  }

  function checkScore() {
    if (initialized) return;
    setInitialized(true);
    for (let i = 0; i < leaderboard.length; i++) {
      if (props.timer.ms <= leaderboard[i].time) {
        addNewScore();
        break;
      }
    }
  }

  useEffect(() => {
    const loadData = async () => {
      const list = await getLeaderboard(db);
      setLeaderboard(list);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (leaderboard.length > 0) checkScore();
  }, [leaderboard]);

  return (
    <div style={styling}>
      <h2>Game Over!</h2>
      <div style={{}}>
        <p>Your Time Was {props.timer.ms.toFixed(1) / 10}s</p>
        <button onClick={props.resetGame}>Play Again?</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            marginBottom: "0",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          Leaderboard
        </h2>
        <table
          style={{ borderSpacing: "0", border: "solid black", width: "250px" }}
        >
          <tbody>
            {leaderboard.map((entry) => {
              return (
                <tr key={`${entry.name}-${entry.time}`}>
                  <td
                    style={{
                      width: "1fr",
                      border: "solid black",
                      fontSize: "24px",
                      backgroundColor: "grey",
                    }}
                  >
                    {entry.name}
                  </td>
                  <td
                    style={{
                      width: "1fr",
                      border: "solid black",
                      fontSize: "24px",
                      backgroundColor: "grey",
                    }}
                  >
                    {entry.time}s
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WinScreen;
