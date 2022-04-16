import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Project1 from "./project-1";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-1/*" element={<Project1 />} />
      </Routes>
    </Router>
  );
};

export default App;
