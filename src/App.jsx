// src/App.jsx
import React, { useState } from "react";
import "./assets/css/index.css";

// Pages
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Certifications from "./pages/Certifications/Certifications";
import Header from "./pages/Header/Header";

// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(false);

  return (
    <Router>
      <Header />
      {isOnePage ? (
        <>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Certifications />
          <Projects />
          <Contact />
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </Router>
  );
}
