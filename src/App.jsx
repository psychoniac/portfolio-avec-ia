import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                Home page <button className="btn">CLICK</button>
              </div>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
