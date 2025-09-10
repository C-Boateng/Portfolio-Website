"use client";

import "../globals.css";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import VideoBackground from "../../components/VideoBackground";

export default function MandelbrotExplorer() {
  return (
    <>
      <Head>
        <title>Mandelbrot Explorer</title>
      </Head>
      <div className="container">
        <VideoBackground />
        <Header />
        <div className="content mandelbrot-content">
          <h1>Mandelbrot Explorer</h1>
          <p>
            The Mandelbrot Explorer is a Windows Forms application developed as an assignment at Utrecht University. This project brings the mesmerizing Mandelbrot set to life with an interactive and visually stunning interface.
            Check out the Mandelbrot Explorer below, where zooming and colorful rendering reveal the fractal’s hidden depths.
          </p>

          <div className="mandelbrot-demo">
            <Image
              src="/mandelbrot-demo.gif"
              alt="Mandelbrot Explorer Demo"
              className="demo-gif"
              width={500}
              height={500}
            />
          </div>
          <h2>The Mandelbrot Set</h2>
          <p>
            At its core, the Mandelbrot set is driven by a recursive function: f(a, b) = (a*a - b*b + x, 2*a*b + y). For each point (x, y) in the complex plane, we start at (0, 0) and iterate this function. The &quot;Mandel number&quot; is the count of iterations until the point’s distance from (0, 0) exceeds 2—or capped at 100, hinting at infinity. This simple rule paints a fractal of astonishing complexity, especially when zoomed between -2.5 and 2.5 for x and y.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li><strong>Interactive Zoom:</strong> Click to zoom in, doubling the scale around your chosen point, with coordinates updating live.</li>
            <li><strong>Custom Controls:</strong> Input the center’s x and y coordinates, scale factor, and max iterations via text boxes, then hit OK to redraw.</li>
            <li><strong>Preset Views:</strong> Jump to hand-picked fractal vistas, including the striking base figure, with settings auto-populated.</li>
            <li><strong>Vivid Colors:</strong> Beyond black-and-white, RGB hues derived from Mandel numbers bring the fractal’s details into vibrant focus.</li>
          </ul>
        </div>
      </div>
    </>
  );
}