import "../../globals.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { courses } from "../../../lib/courses";
import Header from "../../../components/Header";
import VideoBackground from "../../../components/VideoBackground";

export async function generateStaticParams() {
  return courses.completed.map((course) => ({
    courseCode: course.code,
  }));
}

export default async function CoursePage({ params }) {
  const resolvedParams = await params;
  const { courseCode } = resolvedParams;
  const course =
    courses.completed.find((c) => c.code === courseCode) || {
      name: "Course Not Found",
      description: "No details available.",
      fin: "No.",
      information: "The requested course could not be found.",
      projects: [],
      image: "/images/placeholder.png",
    };

  const getLearningHeading = () => {
    return "What I Learned";
  };

  const renderInfo = (information) => {
    const lines = information.split("\n");
    return lines.map((line, index) => {
      if (line.trim().startsWith("###")) {
        const headingText = line.replace("###", "").trim();
        return (
          <h4 key={index} className="information-heading">
            {headingText}
          </h4>
        );
      } else if (line.trim().startsWith("- **")) {
        const text = line.replace("- **", "").replace("**", "").trim();
        return (
          <p key={index} className="information-list-item">
            <strong>{text}</strong>
          </p>
        );
      } else {
        return (
          <p key={index} className="information-text">
            {line.trim() || "\u00A0"}
          </p>
        );
      }
    });
  };

  return (
    <>
      <Head>
        <title>{course.name} - Course Details</title>
      </Head>
      <div className="container">
        <VideoBackground />
        <Header />
        <div className="content course-detail" data-course-code={courseCode}>
          <h1>
            {course.name} ({courseCode})
          </h1>
          {course.fin && <h2>{course.fin}</h2>}
          {course.projects?.length > 0 && (
            <>
              <h3>Projects</h3>
              <div className="project-list">
                {course.projects.map((project, index) => (
                  <Link href={project.url || "#"} key={index}>
                    <div className="project-rectangle">
                      <Image
                        src={project.image}
                        alt={`${project.name} preview`}
                        width={80}
                        height={80}
                        className="project-image"
                      />
                      <span className="project-name">{project.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
          <h3>{getLearningHeading()}</h3>
          <div className="information-container">{renderInfo(course.information)}</div>
          <Link href="/">
            <button className="button">Back to Home</button>
          </Link>
        </div>
      </div>
    </>
  );
}