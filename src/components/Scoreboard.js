import { useState } from "react";
import { Player } from "./Player";
import { PlayerData } from "./PlayerData";

export const Scoreboard = () => {
  const [players, setPlayers] = useState(PlayerData);
  return (
    <div className="scoreboard">
      <p> Scoreboard's players:</p>
      <ul>
        {players.map((player) => (
          //   <Player name={player.name} key={player.id} />
          <Player {...player} key={player.id} />
        ))}
      </ul>
    </div>
  );
};
