import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Navbar } from "react-bootstrap";
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
// import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './pages/Home/Home';
import MetalRoofing from './pages/MetalRoofing/MetalRoofing';
import MetalBuilding from './pages/MetalBuilding/MetalBuilding';
import AboutUs from './pages/AboutUs/AboutUs';
import RoofMnR from './pages/RoofMnR/RoofMnR';

//TODO: fix up the routing so that links will actually work

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavigationBar />
        </div>
        <div>
          <Router>
            <RoofMnR />
            {/* <AboutUs /> */}
            {/* <MetalBuilding /> */}
            {/* <MetalRoofing /> */}
            {/* <Home /> */}
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
