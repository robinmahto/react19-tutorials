import { useState } from "react";

const Square = () => {
  const [value, setValue] = useState("");

  function handleClick() {
    setValue("X");
    console.log("clicked");
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};

const Board = () => {
  return (
    <>
      <div className="border-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="border-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="border-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
};

export default Board;
