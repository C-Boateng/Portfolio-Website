"use client";

import "../globals.css";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import VideoBackground from "../../components/VideoBackground";

export default function schetsplus() {
  return (
    <>
      <Head>
        <title>schetsplus</title>
      </Head>
      <div className="container">
        <VideoBackground />
        <Header />
        <div className="content schetsplus-content">
          <h1>Schetsplus</h1>
          <p>
            Schetsplus is an enhanced version of the provided software, “Schets”, a drawing program, developed as an assignment at Utrecht University. Building on the original sketching app, this project introduces powerful new tools and features, all wrapped in a clean, object-oriented design. Check out the demo below to see how schetsplus elevates drawing with versatility and user-friendly functionality.
          </p>

          <div className="schetsplus-demo">
            <Image
              src="/schetsplus-demo.gif"
              alt="schetsplus Demo"
              className="demo-gif"
              width={500}
              height={500}
            />
          </div>

          <h2>Enhanced Features</h2>
          <p>
            Schetsplus takes the original “Schets” to the next level with:
          </p>
          <ul>
            <li><strong>New Tools:</strong> Draw open and filled rectangles, expanding your creative options alongside lines and curves.</li>
            <li><strong>Save and Load:</strong> Save your artwork in bitmap formats like PNG, JPG, or BMP, and load it back for further editing.</li>
            <li><strong>Smart Eraser:</strong> Click to remove entire elements—like a rectangle or text—revealing underlying drawings without white streaks.</li>
            <li><strong>Undo Functionality:</strong> Easily undo your last action, offering flexibility to refine your masterpiece.</li>
          </ul>
        </div>
      </div>
    </>
  );
}