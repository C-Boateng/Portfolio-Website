"use client";

import "../globals.css";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import VideoBackground from "../../components/VideoBackground";

export default function ReversiGame() {
  return (
    <>
      <Head>
        <title>Reversi Game</title>
      </Head>
      <div className="container">
        <VideoBackground />
        <Header />
        <div className="content reversi-content">
          <h1>Reversi Game</h1>
          <p>
            The Reversi Game is a Windows Forms application developed as an assignment at Utrecht University. This project brings the classic strategy game Reversi (also known as Othello) to life, where two players alternate placing blue and red stones on a grid, flipping their opponent’s stones with each move. Known for its simple rules yet deep strategic depth, Reversi offers endless fun and challenge. Check out the demo below to see the game in action, complete with smooth gameplay and helpful features.
          </p>

          <div className="reversi-demo">
            <Image
              src="/reversi-demo.gif"
              alt="Reversi Game Demo"
              className="demo-gif"
              width={500}
              height={500}
            />
          </div>

          <h2>Game Mechanics</h2>
          <p>
            Played on a default 6x6 grid (though customizable), Reversi pits two players against each other. Each turn, a player places a stone to enclose their opponent’s stones horizontally, vertically, or diagonally between their own. Enclosed stones flip to the player’s color. If no legal move is available, the player passes, and the game ends when neither can move. The winner is the one with the most stones—or it’s a draw if they’re equal.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li><strong>Interactive Board:</strong> Click to place stones on valid squares, with the board and score updating in real time.</li>
            <li><strong>Help Function:</strong> Toggle a mode to highlight all legal moves, making it easy to learn and play.</li>
            <li><strong>Customizable Grid:</strong> Adjust the board size (e.g., 8x8 or even rectangular) by tweaking constants in the code.</li>
            <li><strong>Game Status:</strong> Always know whose turn it is, with a clear announcement of the winner or a draw at the end.</li>
          </ul>
        </div>
      </div>
    </>
  );
}