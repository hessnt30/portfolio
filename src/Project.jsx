import "./project.css"

function Project({ projectTitle, projectDate }) {
  return (
    <>
      <div className="project-container">
        <div className="project-title">{projectTitle}</div>
        <div className="project-date">{projectDate}</div>
      </div>
    </>
  );
}

export default Project;
