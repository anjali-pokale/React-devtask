import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Signup";
import About from "./pages/Landing";
import Contact from "./pages/Login";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
