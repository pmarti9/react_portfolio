import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./components/pages/contact/Contact";
import Portfolio from "./components/pages/portfolio/Portfolio";
import NavTabs from "./components/navigation/NavTabs";

function App() {
  return (
    <Router>
      <div>
        <div>
          <NavTabs />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
