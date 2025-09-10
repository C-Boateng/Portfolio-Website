"use client";

import "./globals.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { courses } from "../lib/courses";
import Header from "../components/Header";
import { useEffect, useRef, useState } from "react";
import VideoBackground from "../components/VideoBackground";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";

// Professional projects data
const professionalProjects = [
  {
    name: "(Feb 2025 - June 2025) Automated Lister",
    code: "thesis",
    description: "An AI-powered application to automate the entire pipeline item listings to eBay for retail sellers.",
    url: "/thesis",
    image: "/images/data.jpg",
  },
  {
    name: "(Aug 2025 - Present) Business Website",
    code: "agrischoenau",
    description: "A web application for a charcoal manufacturing and distribution company.",
    url: "/agrischoenau",
    image: "/images/designs.jpg",
  },
  {
    name: "(July 2025 - Present) Chordly Educational Mobile Application",
    code: "chordly",
    description: "A mobile application for learning music theory, and provides a music content library, listens to a user play his chosen song, and gives feedback.",
    url: "/chordly",
    image: "/images/chordly_logo.png",
  },
];

export default function Home() {
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const curriculumRef = useRef(null);
  const contactRef = useRef(null);
  const progressRef = useRef(null);
  const [formStatus, setFormStatus] = useState("");
  const [progressVisible, setProgressVisible] = useState(false);
  const [hoveredCourse, setHoveredCourse] = useState(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            setProgressVisible(true);
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const courseObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            courseObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe sections
    const sections = [aboutMeRef, projectsRef, curriculumRef, progressRef, contactRef];
    sections.forEach((ref) => ref.current && sectionObserver.observe(ref.current));

    // Observe course items
    let courseItems = [];
    courseItems = Array.from(curriculumRef.current?.querySelectorAll(".course-item") || []);
    courseItems.forEach((item) => courseObserver.observe(item));

    // Observe project items
    let projectItems = [];
    projectItems = Array.from(projectsRef.current?.querySelectorAll(".project-card") || []);
    projectItems.forEach((item) => courseObserver.observe(item));

    return () => {
      sections.forEach((ref) => ref.current && sectionObserver.unobserve(ref.current));
      courseItems.forEach((item) => courseObserver.unobserve(item));
      projectItems.forEach((item) => courseObserver.unobserve(item));
    };
  }, []);

  const renderCourseList = (courseArray, offset = 0) =>
    courseArray.map((course, index) => (
      <div
        key={course.code}
        className="course-item-wrapper"
        onMouseEnter={() => setHoveredCourse(course.code)}
        onMouseLeave={() => setHoveredCourse(null)}
      >
        <Link href={`/courses/${course.code}`} className="course-link">
          <div className={`course-item ${(index + offset) % 2 === 0 ? "image-left" : "image-right"}`}>
            <Image
              src={course.image}
              alt={`${course.name} pictogram`}
              width={120}
              height={120}
              className="course-image"
            />
            <div className="course-content">
              <h4>{course.name} ({course.code})</h4>
              <p>{course.description}</p>
            </div>
          </div>
        </Link>
        {course.projects?.length > 0 && (
          <div className={`project-bar ${hoveredCourse === course.code ? "active" : ""}`}>
            {course.projects.map((project, projIndex) => (
              <Link key={projIndex} href={project.url} className="project-link">
                <div className="project-item">
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    width={60}
                    height={60}
                    className="project-image"
                  />
                  <span className="project-name">{project.name}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    ));

  const renderProfessionalProjects = () =>
    professionalProjects.map((project, index) => (
      <Link key={project.code} href={project.url} className="project-link">
        <div className={`project-card ${index % 2 === 0 ? "image-left" : "image-right"}`}>
          <Image
            src={project.image}
            alt={`${project.name} illustration`}
            width={150}
            height={150}
            className="project-image-placeholder"
          />
          <div className="project-content">
            <h4>{project.name}</h4>
            <p>{project.description}</p>
          </div>
        </div>
      </Link>
    ));

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setFormStatus("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          setFormStatus(`Failed to send: ${error.text}`);
        }
      );
  };

  return (
    <>
      <div className="container">
        <VideoBackground />
        <Header />
        <div className="content">
          <Image src="/images/head.jpg" alt="Portrait" width={200} height={200} className="portrait-image" />
        </div>

        <section id="about-me" className="about-me-section" ref={aboutMeRef}>
          <p>
            I’m a recent AI BSc graduate from Universiteit Utrecht with a passion for machine learning, software development, and information security. This website serves as a portfolio of my academic and project work, showcasing my technical skills for recruiters and industry professionals. Built to gain hands-on experience with programming languages and network components (APIs, VPSs), it highlights my expertise applied to real-world challenges. Some course pages feature interactive programs, like a sudoku solver, with plans to expand this into a full-fledged CV. Explore the site to learn more about my projects and capabilities!
          </p>
        </section>

        <section id="professional-projects" className="professional-projects-section" ref={projectsRef}>
          <h2>Professional Projects</h2>
          <div className="project-list">{renderProfessionalProjects()}</div>
        </section>

        <section id="curriculum" className="curriculum-section" ref={curriculumRef}>
          <h2>Curriculum Vitae</h2>
          <div className="progress-bar" ref={progressRef}>
            <CircularProgressbarWithChildren
              value={progressVisible ? 100 : 0}
              styles={buildStyles({
                pathColor: "rgb(95, 0, 133)",
                pathTransitionDuration: 2.0,
                strokeLinecap: "round",
                strokeDashoffset: "0",
                trailColor: "rgba(255, 255, 255, 0.2)",
              })}
            >
              <div
                style={{ fontSize: "23px", color: "#fff", textAlign: "center", marginTop: "-10px" }}
              >
                180/180 EC
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <h3>Completed Courses</h3>
          <div className="course-list">{renderCourseList(courses.completed)}</div>
        </section>

        <section id="contact" className="section contact-section" ref={contactRef}>
          <h2>Contact</h2>
          <p>Interested in collaborating or discussing opportunities? Reach out to me!</p>
          <form className="form-group" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button className="button" type="submit">SEND</button>
          </form>
          {formStatus && <p className={formStatus.includes("success") ? "success" : "error"}>{formStatus}</p>}
        </section>
      </div>
    </>
  );
}