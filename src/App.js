import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Navbar } from "react-bootstrap";
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
// import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavigationBar />
        </div>
        <div>
          <Router>
            <Home />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
