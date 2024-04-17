import "./info.css";

function Info() {
  return (
    <>
      <div className="info-container">
        <div className="text-container">
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
        <div className="square-border" id="square1"></div>
        <div className="square-border" id="square2"></div>
      </div>
    </>
  );
}

export default Info;
