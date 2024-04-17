import Header from "./Header.jsx";
import Info from "./Info.jsx";
import { useState } from "react";
import ProjectsPage from "./ProjectsPage.jsx";

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
      {activePage == "projects" && <ProjectsPage />}
    </>
  );
}

export default App;
