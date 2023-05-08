import Square from "./Square";

import calculateWinner from "../utils/calculateWinner";

function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  let status;
  if (winner) status = `Winner ${winner}`;
  else status = `${xIsNext ? "X" : "O"} is playing!`;

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";

    onPlay(nextSquares);
  }

  return (
    <>
      <h3>{status}</h3>
      <div>
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <div className="board-row" key={i}>
              {Array(3)
                .fill(null)
                .map((_, j) => {
                  const index = i * 3 + j;
                  return (
                    <Square
                      value={squares[index]}
                      onSquareClick={() => handleClick(index)}
                    />
                  );
                })}
            </div>
          ))}
      </div>

      {/* <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div> */}
    </>
  );
}

export default Board;
