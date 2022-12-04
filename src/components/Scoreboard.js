import { useState } from "react";
import { Player } from "./Player";
import { PlayerData } from "./PlayerData";
import { AddPlayer } from "./AddPlayer";

const compareScore = (playerA, playerB) => {
  return playerB.score - playerA.score;
};

const compareName = (playerA, playerB) => {
  return playerA.name.localeCompare(playerB.name);
};

export const Scoreboard = () => {
  const [players, setPlayers] = useState(PlayerData);

  const [sortBy, setSortBy] = useState("score");

  // const [score, setScore] = useState("");

  //sort players
  //   const sortedPlayers = [...players].sort(compareScore);

  const sortedPlayers = [...players].sort(
    sortBy === "score" ? compareScore : compareName
  );

  //change order
  const changeOrder = (event) => {
    setSortBy(event.target.value);
  };

  //
  const incrementScore = (playerId) => {
    console.log("clicked id:", playerId);
    const newPlayersArray = [...players].map((player) =>
      player.id === playerId ? { ...player, score: player.score + 1 } : player
    );
    setPlayers(newPlayersArray);
  };

  //
  const resetScore = () => {
    const newScore = [...players].map((player) => ({ ...player, score: 0 }));
    setPlayers(newScore);
  };

  // random score between 0 and 100
  const randomizeScore = () => {
    const randomScore = [...players].map((player) => ({
      ...player,
      score: Math.floor(Math.random() * 101),
    }));

    setPlayers(randomScore);
  };

  //add a player
  const addPlayer = (name) => {
    const newPlayer = { id: Math.random(), name, score: 0 };
    const newPlayersArray = [...players, newPlayer];
    setPlayers(newPlayersArray);
  };

  //
  return (
    <div className="scoreboard">
      <div>
        {" "}
        Change order :{" "}
        <select onChange={changeOrder} value={sortBy}>
          <option value="score"> Sort by score </option>
          <option value="name"> Sort by name </option>
        </select>
      </div>
      <div>
        <p> Scoreboard's players:</p>
        <p>
          {" "}
          <button onClick={resetScore}> Reset scores</button>
          <button onClick={randomizeScore}> Randomize scores</button>
        </p>

        <ul>
          {sortedPlayers.map((player) => (
            //   <Player key={player.id} name={player.name} score={player.score} id={player.id} />
            <Player
              {...player}
              key={player.id}
              incrementScore={incrementScore}
            />
          ))}
        </ul>
      </div>
      <AddPlayer addPlayer={addPlayer} />
    </div>
  );
};
