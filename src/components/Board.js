import { Square } from "./Square";
import { calculateWinner } from "../shared";

export function Board({ xIsNext, squares, onPlay }) {

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;

    if (winner) {
        status = 'Ganador: ' + winner;
    } else {
        status = 'Siguiente jugador: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} squares={squares} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} squares={squares} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} squares={squares} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} squares={squares} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} squares={squares} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} squares={squares} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} squares={squares} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} squares={squares}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} squares={squares} />
            </div>
        </>
    );
}
