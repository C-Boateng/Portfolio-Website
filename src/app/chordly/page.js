"use client";

import "../globals.css";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import VideoBackground from "../../components/VideoBackground";

export default function Chordly() {
  return (
    <>
      <Head>
        <title>Chordly: Educational Music Mobile App</title>
      </Head>
      <div className="container">
        <VideoBackground />
        <Header />
        <div className="chordly-content">
          <h1>Chordly: Educational Music Mobile Application</h1>
          <p>
            Chordly is a mobile application built with Flutter to make music theory accessible and engaging for iOS and Android users. It offers an interactive library of chords, scales, and songs, with plans to integrate real-time audio and MIDI processing for personalized feedback on users&apos; playing. As a developer, I focused on creating a responsive, user-friendly interface with dynamic navigation, state management, and content delivery, ensuring cross-platform compatibility and a modular design for future updates.
          </p>
          <p>
            Note: The demo may appear laggy due to recording interference during testing.
          </p>

          <div className="ai-lister-demo">
            <Image
              src="/chordly-demo.gif"
              alt="Chordly Mobile App Demo"
              className="demo-gif"
              width={300}
              height={300}
            />
          </div>

          <h2>Project Contributions</h2>
          <ul>
            <li><strong>Frontend Development:</strong> Built a responsive UI using Flutter and Dart, with dynamic screens for home, library, courses, and settings, optimized for iOS and Android.</li>
            <li><strong>State Management:</strong> Implemented Riverpod for efficient management of UI state, user progress, and content fetching, with plans to use BLoC for real-time audio/MIDI processing.</li>
            <li><strong>Content Library:</strong> Designed a song library with locally cached covers and metadata, fetched via HTTP, supporting search and filtering capabilities.</li>
            <li><strong>User Experience:</strong> Created intuitive navigation with a bottom navigation bar, sidebar menu, and pop-up dialogs, inspired by apps like Simply Piano and Flowkey.</li>
            <li><strong>Cross-Platform Compatibility:</strong> Ensured consistent functionality and styling across iOS and Android using Flutter’s single codebase.</li>
          </ul>

          <h2>Technologies Used</h2>
          <ul>
            <li><strong>Flutter/Dart:</strong> For building cross-platform mobile applications with a single codebase.</li>
            <li><strong>Riverpod:</strong> For type-safe, modular state management of UI and data fetching.</li>
            <li><strong>Firebase (Firestore):</strong> For user authentication, progress tracking, and cloud-based data storage.</li>
            <li><strong>Google Fonts:</strong> Utilized Bebas Neue for visually appealing typography.</li>
            <li><strong>Git:</strong> For version control and collaborative development.</li>
            <li><strong>Planned Technologies:</strong> C/C++ with FFI for optimized audio processing (pitch detection, onset detection, polyphonic analysis) and MIDI input support.</li>
          </ul>

          <h2>Planned Features</h2>
          <ul>
            <li><strong>Real-Time Feedback:</strong> Implement audio/MIDI processing for real-time note detection and feedback, with visual cues (e.g., color-changing notes).</li>
            <li><strong>Lesson Management:</strong> Support dynamic lesson states, sheet music rendering, and progress tracking for beginner, intermediate, and advanced courses.</li>
            <li><strong>Authentication:</strong> Add optional login via Google, Apple, Facebook, or email, with anonymous progress syncing to Firestore.</li>
            <li><strong>Content Caching:</strong> Optimize song content (e.g., MusicXML, tutorials) with local caching and efficient HTTP fetching.</li>
            <li><strong>Engagement Features:</strong> Introduce challenges, notifications, and a level system with coins, scores, and experience points.</li>
          </ul>

          <h2>Resources</h2>
          <p>
            Explore the code and documentation on the project’s GitHub repository: 
            <a href="https://github.com/C-Boateng/Chordly" target="_blank" rel="noopener noreferrer">Chordly</a>.
          </p>
        </div>
      </div>
    </>
  );
}