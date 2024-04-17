import Project from "./Project.jsx";
import "./projectlist.css"

function ProjectList({ title, projectNames, projectDates }) {
  return (
    <>
      <div className="project-list-container">
        <div className="project-list-title">{title}</div>
        <div className="projects-container">
          <Project
            projectTitle={projectNames[0]}
            projectDate={projectDates[0]}
          />
          <Project
            projectTitle={projectNames[1]}
            projectDate={projectDates[1]}
          />
          <Project
            projectTitle={projectNames[2]}
            projectDate={projectDates[2]}
          />
        </div>
      </div>
    </>
  );
}

export default ProjectList;
