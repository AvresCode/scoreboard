import { useState } from "react";
import { Player } from "./Player";
import { PlayerData } from "./PlayerData";

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
    </div>
  );
};
