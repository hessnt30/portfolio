import Header from "./Header.jsx";
import Info from "./Info.jsx";
import { useState, useEffect } from "react";
import ProjectsPage from "./ProjectsPage.jsx";

function App() {
  const [activePage, setActivePage] = useState("home"); // Initialize activePage state
  const [toggleDarkMode, setToggleDarkMode] = useState("dark"); // Initialize dark mode state

  useEffect(() => {
    // Update dark mode class on body element
    document.body.classList.toggle("dark-mode", toggleDarkMode === "light");
    // Update dark mode class on container element
    const container = document.querySelector(".container");
    if (container) {
      container.classList.toggle("container-dark-mode", toggleDarkMode === "light");
    }
  }, [toggleDarkMode]);

  // Function to handle page change
  const handlePageChange = (page) => {
    setActivePage(page); // Update activePage state
  };

  // Function to handle page change
  const handleToggleDarkMode = (mode) => {
    setToggleDarkMode(mode); // Update activePage state
    console.log(toggleDarkMode);
  };

  return (
    <>
      <Header
        onPageChange={handlePageChange}
        darkModeToggle={handleToggleDarkMode}
        darkMode={toggleDarkMode == "dark" ? true : false}
      />
      {activePage == "home" && (
        <Info darkMode={toggleDarkMode == "dark" ? true : false} />
      )}
      {activePage == "projects" && (
        <ProjectsPage darkMode={toggleDarkMode == "dark" ? true : false} />
      )}
    </>
  );
}

export default App;
