import { useState } from "react";
export const AddPlayer = ({ addPlayer }) => {
  const [name, setName] = useState("");
  return (
    <div>
      <p>
        {" "}
        Add player :{" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />{" "}
        <button
          onClick={() => {
            addPlayer(name);
            setName("");
          }}
        >
          {" "}
          Add{" "}
        </button>
      </p>
    </div>
  );
};
