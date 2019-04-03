import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Navbar } from "react-bootstrap";
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
// import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './pages/Home';

// class App extends React.Component {
//     render() {
//         return (
//           <div className="App container">
//             <Navbar fluid collapseOnSelect>
//               <Navbar.Header>
//                 <Navbar.Brand>
//                   <Link to="/">Innovation Metal Roofing</Link>
//                 </Navbar.Brand>
//                 <Navbar.Toggle />
//               </Navbar.Header>
//             </Navbar>
//             <Routes />
//           </div>
//         );
//       }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <div>
          <Router>
            <Home />
          </Router>
        </div>
      </div>
    );
  }
}

// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         {/* everything in div is the nav bar stuff */}
//         <div>
//           <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <ul className="navbar-nav mr-auto">
//               <li>
//                 <Link to={'/'} className="nav-link">
//                   Home
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//           <hr />
//           {/* Routes is our from our Routes.js file */}
//           <Routes />
//           <hr />
//         </div>
//       </Router>
//     );
//   }
// }

export default App;
