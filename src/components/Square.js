import { calculateWinner } from "../shared";

export function Square({ value, onSquareClick, squares }) {
  return <button style={{color: value === calculateWinner(squares) && 'red'}} className="square" onClick={onSquareClick}>{value}</button>
}


