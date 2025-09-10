"use client";

import "../globals.css";
import Head from "next/head";
import { useState, useRef } from "react";
import Header from "../../components/Header";
import VideoBackground from "../../components/VideoBackground";

export default function SudokuSolver() {
  const [puzzle, setPuzzle] = useState("");
  const [submittedPuzzle, setSubmittedPuzzle] = useState(""); // Store the puzzle at the time of submission
  const [algorithm, setAlgorithm] = useState("cbt");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const formRef = useRef(null); // Ref for the form to handle Enter key submission

  const handleSolve = async () => {
    try {
      setError(null);
      setResult(null);
      setSubmittedPuzzle(puzzle);
  
      // Trim and clean input
      const cleanedPuzzle = puzzle.trim();
      const puzzleArray = cleanedPuzzle.split(/\s+/);
      if (puzzleArray.length !== 81) {
        setError("Puzzle must contain exactly 81 space-separated numbers (0-9).");
        return;
      }
  
      // Timeout handling with Promise.race (no need for AbortController)
      const response = await Promise.race([
        fetch("https://api.calvinboateng.nl/api/sudoku/solve", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ puzzle: cleanedPuzzle, algorithm }),
        }),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 10000)),
      ]);
  
      if (!response.ok) {
        if (response.status === 504) {
          setError("Server took too long to respond. Please ensure the sudoku is valid or try again later.");
          return;
        }
        const errorData = await response.text();
        setError(errorData || "An error occurred.");
        return;
      }
  
      const data = await response.json();
      setResult(data);
    } catch (err) {
      if (err.message === "Timeout") {
        setError("Server took too long to respond. Please ensure the sudoku is valid or try again later.");
      } else {
        setError("Failed to connect to the API. Check your internet or try later.");
      }
    }
  };
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { // Allow Enter to submit, but Shift+Enter for new line in textarea
      e.preventDefault();
      handleSolve();
    }
  };

  const renderGrid = (puzzleString) => {
    if (!puzzleString || puzzleString.length < 81) return <p>Invalid puzzle</p>;

    // Remove spaces and ensure we have exactly 81 digits
    const cleanedPuzzle = puzzleString.replace(/\s/g, "");
    if (cleanedPuzzle.length !== 81) return <p>Invalid puzzle format</p>;

    return (
      <div className="sudoku-grid">
        {cleanedPuzzle.split("").map((cell, index) => (
          <div
            key={index}
            className={`sudoku-cell ${index % 9 === 2 || index % 9 === 5 ? "border-right" : ""} ${
              Math.floor(index / 9) === 2 || Math.floor(index / 9) === 5 ? "border-bottom" : ""
            } ${cell === "0" ? "empty-cell" : ""}`}
          >
            {cell === "0" ? "" : cell}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Sudoku Solver</title>
      </Head>
      <div className="container">
        <VideoBackground />
        <Header />
        <div className="content sudoku-content">
          <h1>Sudoku Solver</h1>
          <form ref={formRef} onSubmit={(e) => { e.preventDefault(); handleSolve(); }}>
            <textarea
              value={puzzle}
              onChange={(e) => setPuzzle(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter Sudoku puzzle (81 characters, 0 for empty cells)"
              rows="10"
              cols="50"
              className="sudoku-input"
            />
            <div className="buttons">
              <div className="algorithm-selector">
                <label className="algorithm-label">Algorithm</label>
                <select
                  value={algorithm}
                  onChange={(e) => setAlgorithm(e.target.value)}
                  className="sudoku-select"
                >
                  <option value="cbt">Chronological Backtracking (CBT)</option>
                  <option value="fc">Forward Checking (FC)</option>
                  <option value="fc_mcv">FC with Most Constrained Variable (FC_MCV)</option>
                </select>
              </div>
              <button type="submit" className="button">Solve</button>
            </div>
          </form>
          {error && <p className="error">Error: {error}</p>}
          {result && (
            <div className="sudoku-result">
              <h2>Solution</h2>
              <div className="result-details">
                <p>
                  <strong>Solved:</strong> {result.solved ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Time Taken:</strong> {(result.timeTaken * 1000).toFixed(2)} ms
                </p>
                {renderGrid(result.solved ? result.solvedPuzzle : submittedPuzzle)}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}