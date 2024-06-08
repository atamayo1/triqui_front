import { useState } from "react";
import { Board } from "./Board";

export function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const [scores, setScores] = useState({ X: 0, O: 0 });
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handleScore(squares) {
        const winner = calculateWinner(squares);
        if (winner) {
            const newScores = { ...scores };
            newScores[winner]++;
            setScores(newScores);
        }
    }

    function handlePlay(nextSquares) {
        handleScore(nextSquares);
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Ir al movimiento #' + move;
        } else {
            description = 'Ir al inicio del juego';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return <div className="game">
        <div className="game-board">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
            <div className="score-board">
                <div>Score X: {scores.X}</div>
                <div>Score O: {scores.O}</div>
            </div>
            <ol>{moves}</ol>
        </div>
    </div>
}