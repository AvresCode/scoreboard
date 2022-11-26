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
      <p> Scoreboard's players:</p>
      <ul>
        {sortedPlayers.map((player) => (
          //   <Player name={player.name} key={player.id} />
          <Player {...player} key={player.id} />
        ))}
      </ul>
    </div>
  );
};
