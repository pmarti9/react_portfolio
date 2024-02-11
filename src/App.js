import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';

// \\
import "./App.css";
import Home from "./components/pages/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import NavTabs from "./components/navigation/NavTabs";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <div>
          <NavTabs />

          <Route exact path="/" component={Home} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Contact" component={Contact} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
