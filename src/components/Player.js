import "./Player.scss";

export const Player = (props) => {
  return (
    <li className="Player">
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      />{" "}
      <p>
        {" "}
        {props.name} (Score: {props.score})
        <button onClick={() => props.incrementScore(props.id)}>
          Increment
        </button>
      </p>
    </li>
  );
};
