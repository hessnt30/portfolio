import "./info.css";

function Info({ darkMode }) {
  return (
    <>
      <div
        className="info-container"
        id={darkMode ? "info-container-dark" : "info-container-light"}
      >
        <div
          className="text-container"
          id={darkMode ? "text-container-dark" : "text-container-light"}
        >
          <div className="header-text-container">
            <p className="my-name">Nicholas Hess</p>
            <p className="my-title">Computer Science Student</p>
          </div>
          <div className="body-text-container">
            <p className="my-info">
              My name is Nicholas Hess, and I am a Junior pursuing a Bachelor of
              Science in Computer Science at Virginia Tech. I am proficient in
              Java, Python, C, JavaScript, and HTML/CSS. I've engineered dynamic
              websites for real-time data relay from Minecraft servers and
              implemented user authentication for various projects.
            </p>
            <p className="my-info" id="my-info-pt2">
              Last little blurb here.
            </p>
          </div>
        </div>
        <div
          className="square-border"
          id={darkMode ? "square1-dark" : "square1-light"}
        ></div>
        <div
          className="square-border"
          id={darkMode ? "square2-dark" : "square2-light"}
        ></div>
      </div>
    </>
  );
}

export default Info;
