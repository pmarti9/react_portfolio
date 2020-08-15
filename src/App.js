import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter} from "react-router-dom"
// import logo from './logo.svg';


// \\
import './App.css';
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Contact from "./components/Contact/Contact"
import Portfolio from './components/Portfolio/Portfolio';


function App() {
  return ( 
    <Router>
    <BrowserRouter basename={process.env.PUBLIC_URL}></BrowserRouter>
    <div>
    <Navbar />
      <Switch>
        <Route exact path={["/", "/Home"]}>
          <Home />
        </Route>
        <Route exact path={['/Contact']}>
          <Contact />
          </Route>
        <Route exact path={['/Portfolio']}>
          <Portfolio />
        </Route>
        </Switch>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
