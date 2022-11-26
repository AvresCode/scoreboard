export const Player = (props) => {
  return (
    <div className="player">
      <li>
        {" "}
        Name: {props.name} (Score: {props.score})
      </li>
    </div>
  );
};
