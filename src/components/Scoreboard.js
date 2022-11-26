import { Player } from "./Player";
import { PlayerData } from "./PlayerData";

export const Scoreboard = () => {
  return (
    <div className="scoreboard">
      <p> Scoreboard's players:</p>
      <ul>
        {PlayerData.map((player) => (
          //   <Player name={player.name} key={player.id} />
          <Player {...player} />
        ))}
      </ul>
    </div>
  );
};
