import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import About from "./component/about/About";
import Contact from "./component/Contact/Contact";
import Header from "./component/header/Header";

import Serviserapw from "./component/services/Serviserapw";
import Teams from "./component/Teams/Teams";
import HomeContact from "./component/HomeContact ";
import Footer from "./component/footer/Footer";
import Project from "./component/project/Project";
import ScrollProgress from "./component/ScrollProgress";
import './App.css';
import About from "./component/about/about";
// import About from "./component/about/About";
// import About from "./component/about/about";

function App() {
  return (
    <Router>
      <div>
        <ScrollProgress />
        <Header />
        <Routes>
          <Route path="/" element={<HomeContact />} /> {/* Default route */}
          <Route path="/about" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/service" element={<Serviserapw />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Teams" element={<Teams />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
// https://new-ikim-tech-solution-8e1s.vercel.app/