import { useState } from "react";
import "./header.css";

function Header({ onPageChange, darkModeToggle, darkMode }) {
  const [activePage, setActivePage] = useState("home"); // Initialize activePage state
  const [toggleDarkMode, setToggleDarkMode] = useState("dark"); // Initialize dark mode state

  // Function to handle navigation to home page
  const navigateHome = () => {
    setActivePage("home"); // Update activePage state
    onPageChange("home"); // Call onPageChange callback with "home"
  };

  // Function to handle navigation to projects page
  const navigateProjects = () => {
    setActivePage("projects"); // Update activePage state
    onPageChange("projects"); // Call onPageChange callback with "projects"
  };

  // Function to toggle dark mode
  const activateToggleDarkMode = () => {
    toggleDarkMode === "dark"
      ? setToggleDarkMode("light")
      : setToggleDarkMode("dark");
    toggleDarkMode === "dark"
      ? darkModeToggle("light")
      : darkModeToggle("dark");
  };

  return (
    <>
      <div className="header" id={darkMode ? "header-dark" : "header-light"}>
        <div className="welcome">
          <p className="welcome-text">welcome.</p>
        </div>
        <div className="navbar">
          <ul className="nav-items">
            <li
              className={`nav-item ${
                activePage === "home" ? "nav-item-active" : "nav-item"
              }`}
              id="nav-item-home"
              onClick={navigateHome}
            >
              <p>home</p>
            </li>

            <li
              className={`nav-item ${
                activePage === "projects" ? "nav-item-active" : "nav-item"
              }`}
              id="nav-item-projects"
              onClick={navigateProjects}
            >
              <p>projects</p>
            </li>
          </ul>
        </div>
        <div className="personal-links-container">
          <ul className="personal-links">
            <li className="email">
              <a
                className="links"
                href="mailto:hessnt30@vt.edu"
                id={darkMode ? "links-dark" : "links-light"}
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
            <li className="github">
              <a
                className="links"
                href="https://github.com/hessnt30"
                id={darkMode ? "links-dark" : "links-light"}
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="linkedin">
              <a
                className="links"
                href="https://www.linkedin.com/in/nicholas-hess-b95a2a21a/"
                id={darkMode ? "links-dark" : "links-light"}
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li onClick={activateToggleDarkMode} className="darkmode-toggle">
              <i className="fa-solid fa-moon"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
