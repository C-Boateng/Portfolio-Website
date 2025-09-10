"use client";

import "../globals.css";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import VideoBackground from "../../components/VideoBackground";

export default function AgriSchoenau() {
  return (
    <>
      <Head>
        <title>Agri Schoenau: Charcoal Supply Chain Website</title>
      </Head>
      <div className="container">
        <VideoBackground />
        <Header />
        <div className="ai-lister-content">
          <h1>Agri Schoenau Website Development</h1>
          <p>
            The Agri Schoenau website is a platform designed to showcase sustainable charcoal products, promote transparency in sourcing and logistics, and engage customers through educational and news content. As a full-stack developer, I built this project to highlight my expertise in creating responsive, visually appealing web applications with a focus on user experience and modular design. The business is currently undergoing a brand change and I got the opportunity to develop and maintain the revamped website.
          </p>

          <div className="ai-lister-demo">
            <Image
              src="/agrischoenau-demo.gif"
              alt="Agri Schoenau Website Demo"
              className="demo-gif"
              width={500}
              height={500}
            />
          </div>

          <h2>Project Contributions</h2>
          <ul>
            <li><strong>Frontend Development:</strong> Built a responsive and immersive user interface using Next.js and React, featuring a full-screen cinematic video background and interactive product showcases with hover effects.</li>
            <li><strong>Styling and Animations:</strong> Implemented custom CSS with a focus on responsive design, utilizing Bebas Neue font for consistent typography and smooth animations for enhanced user engagement.</li>
            <li><strong>Component Architecture:</strong> Designed reusable React components for the header, video background, and product sections, ensuring modularity and scalability.</li>
            <li><strong>Form Integration:</strong> Integrated form-based contact functionality to facilitate B2B and DTC customer inquiries, enhancing user interaction.</li>
            <li><strong>Content Management:</strong> Structured content to highlight sustainability, supply chain transparency, and educational resources, aligning with the brand’s mission-driven marketing goals.</li>
          </ul>

          <h2>Technologies Used</h2>
          <ul>
            <li><strong>Next.js:</strong> For server-side rendering and static site generation, optimizing performance and SEO.</li>
            <li><strong>React:</strong> For building dynamic and reusable UI components.</li>
            <li><strong>CSS:</strong> Custom styles for responsive layouts, animations, and visual effects.</li>
            <li><strong>TypeScript:</strong> For type-safe JavaScript development, improving code reliability.</li>
            <li><strong>Git:</strong> For version control and collaborative development.</li>
          </ul>

          <h2>Resources</h2>
          <p>
            Explore the code and documentation on the project’s GitHub repository: 
            <a href="https://calvinboateng.nl/dev/" target="_blank" rel="noopener noreferrer"> Agri Schoenau</a>.
          </p>
        </div>
      </div>
    </>
  );
}