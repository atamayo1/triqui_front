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

    const renderSquare = (i) => (
        <Square
            key={i}
            value={squares[i]}
            onSquareClick={() => handleClick(i)}
            squares={squares}
        />
    );

    const boardSize = 3; // Número de filas y columnas en el tablero
    const board = Array(boardSize).fill(null).map((_, rowIndex) => {
        const rowSquares = Array(boardSize).fill(null).map((_, colIndex) => {
            const squareIndex = rowIndex * boardSize + colIndex;
            return renderSquare(squareIndex);
        });
        return (
            <div key={rowIndex} className="board-row">
                {rowSquares}
            </div>
        );
    });

    return (
        <>
            <div className="status">{status}</div>
            {board}
        </>
    );
}
