import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./component/about/About";
import Contact from "./component/Contact/Contact";
import Header from "./component/header/Header";
import Home from "./component/Home/Home";
import Serviserapw from "./component/services/Serviserapw";
import Teams from "./component/Teams/Teams";
import HomeContact from "./component/HomeContact ";
import Footer from "./component/footer/Footer";
import Project from "./component/project/Project";

function App() {
  return (
    <Router>
      <div>
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