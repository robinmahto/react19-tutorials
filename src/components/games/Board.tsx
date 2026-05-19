import { useState } from "react";

interface props {
  value: null;
  onSqaureClick: () => void;
}

const Square = ({ value, onSqaureClick }: props) => {
  return (
    <button className="square" onClick={onSqaureClick}>
      {value}
    </button>
  );
};

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSqaures = squares.slice();
    nextSqaures[i] = "X";
    setSquares(nextSqaures);
  }

  return (
    <>
      <div className="border-row">
        <Square value={squares[0]} onSqaureClick={()=>{handleClick(0)}} />
        <Square value={squares[1]} onSqaureClick={()=>{handleClick(1)}} />
        <Square value={squares[2]} onSqaureClick={()=>{handleClick(2)}} />
      </div>

      <div className="border-row">
        <Square value={squares[3]} onSqaureClick={()=>{handleClick(3)}} />
        <Square value={squares[4]} onSqaureClick={()=>{handleClick(4)}} />
        <Square value={squares[5]} onSqaureClick={()=>{handleClick(5)}} />
      </div>

      <div className="border-row">
        <Square value={squares[6]} onSqaureClick={()=>{handleClick(6)}} />
        <Square value={squares[7]} onSqaureClick={()=>{handleClick(7)}} />
        <Square value={squares[8]} onSqaureClick={()=>{handleClick(8)}} />
      </div>
    </>
  );
};

export default Board;
