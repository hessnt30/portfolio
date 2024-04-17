import ProjectList from "./ProjectList.jsx";
import "./projectspage.css";

function Projects() {
  return (
    <>
      <div className="info-container">
        <div className="project-lists-container">
          <ProjectList
            title={"personal"}
            projectNames={[
              "Movie Finder",
              "Minecraft Server Status",
              "Project 3",
            ]}
            projectDates={["march 2024", "february 2024", "january 2024"]}
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
        <div className="square-border" id="square1"></div>
        <div className="square-border" id="square2"></div>
      </div>
    </>
  );
}

export default Projects;
