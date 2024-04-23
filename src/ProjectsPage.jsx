import ProjectList from "./ProjectList.jsx";
import "./projectspage.css";

function Projects({ darkMode }) {
  return (
    <>
      <div
        className="projects-page-container"
        id={
          darkMode
            ? "projects-page-container-dark"
            : "projects-page-container-light"
        }
      >
        <div
          className="project-lists-container"
          id={
            darkMode
              ? "project-lists-container-dark"
              : "project-lists-container-light"
          }
        >
          <ProjectList
            title={"personal"}
            projectNames={[
              "Leetcodle",
              "Movie Finder",
              "Minecraft Server Status",
            ]}
            projectDates={["april 2024", "february 2024", "february 2024"]}
          />
          <ProjectList
            title={"academic"}
            projectNames={[
              "Virtual QuickSort",
              "RISC-V Assembler",
              "PRQuadTree + SkipList",
            ]}
            projectDates={["april 2024", "march 2024", "february 2024"]}
          />
        </div>
        <div
          className="project-square-border"
          id={darkMode ? "project-square1-dark" : "project-square1-light"}
        ></div>
        <div
          className="project-square-border"
          id={darkMode ? "project-square2-dark" : "project-square2-light"}
        ></div>
      </div>
    </>
  );
}

export default Projects;
