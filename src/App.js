import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
// import logo from './logo.svg';
import './App.css';
import Index from "./components/Index/Index"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Contact from "./components/Contact/Contact"

function App() {
  return ( 
    <Router>
    <div>
    <Navbar />
      <Switch>
        <Route exact path={["/", "/index"]}>
          <Index />
        </Route>
        </Switch>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
