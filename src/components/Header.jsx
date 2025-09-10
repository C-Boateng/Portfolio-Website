"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className="header">
      <Link href="/">
        <div className="initials-circle">
          CB.
        </div>
      </Link>
      {isHomePage && (
        <div className="nav-container">
          <nav className="nav">
            <button
              onClick={() => document.getElementById("about-me").scrollIntoView({ behavior: "smooth" })}
              className="nav-link"
            >
              About Me
            </button>
            <button
              onClick={() => document.getElementById("curriculum").scrollIntoView({ behavior: "smooth" })}
              className="nav-link"
            >
              Curriculum
            </button>
            <button
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              className="nav-link"
            >
              Contact
            </button>
          </nav>
          <a
            href="https://github.com/c-boateng"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <Image
              src="/images/github.png"
              alt="GitHub Icon"
              width={35}
              height={35}
              className="github-icon"
            />
            GitHub
          </a>
        </div>
      )}
    </header>
  );
}