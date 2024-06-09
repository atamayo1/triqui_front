import { calculateWinner } from "../shared";

export function Square({ value, onSquareClick, isWinningSquare  }) {
  return <button style={{ color: isWinningSquare ? 'red' : 'black' }} className="square" onClick={onSquareClick}>{value}</button>
}


