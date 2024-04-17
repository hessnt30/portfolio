import Header from "./Header.jsx";
import Info from "./Info.jsx";
import { useState } from "react";
import Projects from "./Projects.jsx";

function App() {
  const [activePage, setActivePage] = useState("home"); // Initialize activePage state

  // Function to handle page change
  const handlePageChange = (page) => {
    setActivePage(page); // Update activePage state
  };

  return (
    <>
      <Header onPageChange={handlePageChange} />
      {activePage == "home" && <Info />}
      {activePage == "projects" && <Projects />}
    </>
  );
}

export default App;
