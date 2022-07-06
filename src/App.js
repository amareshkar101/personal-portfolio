import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import Projects from "./pages/projects/Projects"
import Experience from "./pages/experience/Experience";
import Navbar from "./components/navbar/Navbar";
import ProjectDisplay from "./pages/projects/ProjectDisplay";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
