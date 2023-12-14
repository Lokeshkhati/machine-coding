'use client'
import { useState } from "react"
import Heading from "../Heading"

const BOARD = Array.from({ length: 9 }).fill(null)
const WINNING_POSSIBILITIES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

]

const TicTacToe = () => {
    const [board, setBoard] = useState(BOARD)
    const [isXPlaying, setIsXPlaying] = useState(true)

    const turn = isXPlaying ? "X" : "O"

    function determineWinner() {
        for (let i = 0; i < WINNING_POSSIBILITIES.length; i++) {
            const [x, y, z] = WINNING_POSSIBILITIES[i]
            if (board[x] !== null && board[x] === board[y] && board[y] === board[z]) {
                return board[x]
            }

        }
        return null
    }
    const winner = determineWinner()

    function getMessage() {
        if (winner !== null) {
            return `Player ${winner} wins`
        }
        if (!board.includes(null)) {
            return "It's Draw"
        }
        return `Player ${turn} turn`
    }

    function clickHandler(index: number) {
        const newBoard = board.slice()
        newBoard[index] = turn
        setBoard(newBoard)
        setIsXPlaying(!isXPlaying)
    }

    function resetHandler() {
        setBoard(BOARD)
        setIsXPlaying(true)
    }

    return (
        <div className=" flex flex-col items-center justify-center gap-y-6 h-full">
            <Heading>TicTacToe</Heading>
            <p className="text-3xl font-medium text-gray-900">{getMessage()}</p>
            <div className="grid grid-cols-3 w-[20rem] h-[20rem] border border-gray-900">
                {
                    BOARD.map((_, index) => <button key={index} className="text-4xl font-bold text-gray-900 border border-gray-900"
                        onClick={() => clickHandler(index)}
                        disabled={board[index] !== null || winner !== null}
                    >

                        {board[index]}
                    </button>)
                }
            </div>

            <button className="bg-rose-500 rounded px-8 py-2 text-xl font-semibold text-white hover:bg-rose-600" onClick={resetHandler}>RESET</button>
        </div>
    )
}
export default TicTacToe