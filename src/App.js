import React from "react";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import Home from "./components/pages/home/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./components/pages/contact/Contact";
import Portfolio from "./components/pages/portfolio/Portfolio";
import NavTabs from "./components/navigation/NavTabs";
import TechBackground from "./components/Background/TechBackground";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="page"
      >
        <div className="page-container">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <Router>
      <TechBackground />
      <div className="app-wrapper">
        <NavTabs />
        <div className="content-wrapper">
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
