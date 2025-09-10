"use client";

import "../globals.css";
import Head from "next/head";
import Header from "../../components/Header";
import VideoBackground from "../../components/VideoBackground";

export default function SudokuSolver() {
  return (
    <>
      <Head>
        <title>Under Development</title>
      </Head>
      <div className="container">
        <VideoBackground />
        <Header />
        <div className="content">
          <h1>Sorry! This section is still under construction. It should be completed soon. :)</h1>
        </div>
      </div>
    </>
  );
}