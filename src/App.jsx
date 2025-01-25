import React from "react";
import Header from "./components/Header"; 
import Contact from "./components/Contact";
import Home from "./components/Home";
import Skills from "./components/Skills";
import "./App.css";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        {/* Add other sections */}
      </main>
      <Contact />
    </div>
  );
}

export default App;
