import { useState } from "react";
import { Player } from "./Player";
import { PlayerData } from "./PlayerData";

const compareScore = (playerA, playerB) => {
  return playerB.score - playerA.score;
};

export const Scoreboard = () => {
  const [players, setPlayers] = useState(PlayerData);

  //sort players
  const sortedPlayers = [...players].sort(compareScore);

  //
  return (
    <div className="scoreboard">
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
