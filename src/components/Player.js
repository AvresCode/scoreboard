import "./Player.scss";

export const Player = (props) => {
  return (
    <li className="Player">
      {" "}
      <p>
        {" "}
        Name: {props.name} (Score: {props.score})
        <button onClick={() => props.incrementScore(props.id)}>
          Increment
        </button>
      </p>
    </li>
  );
};
