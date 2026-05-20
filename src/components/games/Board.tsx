import { useState } from "react";
import { calculateWinner } from "../../utils/calculateWinner";

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
  const [xIsNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSqaures = squares.slice();
    if (xIsNext) {
      nextSqaures[i] = "X";
    } else {
      nextSqaures[i] = "O";
    }

    setSquares(nextSqaures);
    setXisNext(!xIsNext);
  }

  let status;
  const winner = calculateWinner(squares);
  if (winner) {
    status = `winner : ${winner}`;
  } else {
    status = `next player : ${xIsNext ? "X" : "O"}`;
  }

  return (
    <>
      <div className="status">{status}</div>

      <div className="border-row">
        <Square
          value={squares[0]}
          onSqaureClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={squares[1]}
          onSqaureClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={squares[2]}
          onSqaureClick={() => {
            handleClick(2);
          }}
        />
      </div>

      <div className="border-row">
        <Square
          value={squares[3]}
          onSqaureClick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={squares[4]}
          onSqaureClick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={squares[5]}
          onSqaureClick={() => {
            handleClick(5);
          }}
        />
      </div>

      <div className="border-row">
        <Square
          value={squares[6]}
          onSqaureClick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={squares[7]}
          onSqaureClick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={squares[8]}
          onSqaureClick={() => {
            handleClick(8);
          }}
        />
      </div>
    </>
  );
};

export default Board;
