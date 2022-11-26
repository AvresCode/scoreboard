export const Player = (props) => {
  return (
    <div className="player">
      <li>
        {" "}
        Name: {props.name} (Score: {props.score})
        <button onClick={() => props.incrementScore(props.id)}>
          Increment
        </button>
      </li>
    </div>
  );
};
