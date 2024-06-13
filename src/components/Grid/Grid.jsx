import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css';
import isWinner from '../../helpers/checkWinner';

function Grid({ numberOfCards }) {
    const [board, setBoard] = useState(Array(numberOfCards).fill(''));
    const [turn, setTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    function play(index) {
        if (board[index] !== '' || winner) return; // Prevent clicking on filled spots or if there's a winner

        const newBoard = [...board];
        newBoard[index] = turn ? 'O' : 'X';
        setBoard(newBoard);

        const win = isWinner(newBoard, turn ? 'O' : 'X');
        if (win) {
            setWinner(win);
        } else {
            setTurn(!turn);
        }
    }
function reset() {
    setTurn(true)
    setWinner(null)
    setBoard(Array(numberOfCards).fill(''))
}
    return (
        <div className="grid-wrapper">
            {winner && (
                <>
                    <h1 className="turn-highlight">WINNER IS {winner}</h1>
                    <button className="reset" onClick={reset}>RESET GAME</button>
                </>
            )}

            <h1 className="turn-highlight">CURRENT TURN: {turn ? 'O' : 'X'}</h1>
            <div className="grid">
                {board.map((el, idx) => <Card key={idx} onPlay={play} player={el} index={idx} gameEnd={winner ? true : false} />)}
            </div>
        </div>
    );
}

export default Grid;
