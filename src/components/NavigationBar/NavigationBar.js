import React, { Component } from 'react';
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import './NavigationBar.css';

class NavigationBar extends Component {
  render() {
    return (
      <div className="NavigationBar">
        <nav class="navbar navbar-expand-md navbar-light bg-light">
          {/* left align */}
          <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav mr-auto">
              <li>
                <b class="nav-brand">832-316-4214</b>
              </li>
              <li>
                <b class="nav-brand">jeffrysandoval24@gmail.com</b>
              </li>
            </ul>
          </div>

          {/* right */}
          <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.instagram.com/innovationmetalroofing"
                >
                  <img src={require('./facebookSmallBlue.png')} alt="ig" />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://twitter.com/innovationmroof">
                  <img src={require('./facebookSmall.png')} alt="tw" />
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.facebook.com/innovationmetalroofing"
                >
                  <img src={require('./facebookSmall.png')} alt="fb" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

// class NavigationBar extends Component {
//   render() {
//     return (
//       <div className="NavigationBar">
//         <nav class="navbar navbar-default" role="navigation">
//           <div class="navbar-header">
//             <button
//               type="button"
//               class="navbar-toggle"
//               data-toggle="collapse"
//               data-target=".navbar-collapse"
//             >
//               <span class="icon-bar" />
//               <span class="icon-bar" />
//               <span class="icon-bar" />
//             </button>
//           </div>
//           <div class="navbar-collapse collapse">
//             <ul class="navbar-nav">
//               <li class="nav-item">
//               <a>832-316-4214</a>
//               </li>
//               <li class="nav-item">
//               <a>innovationmetalroofing@gmail.com</a>
//               </li>
//             </ul>
//             <ul class="nav navbar-nav navbar-right">
//               <li>
//                 <a href="https://www.instagram.com/innovationmetalroofing">
//                   <img src={require('./facebookSmallBlue.png')} alt="ig" />
//                 </a>
//               </li>
//               {/* <li>
//                 <a href="https://twitter.com/innovationmroof">
//                   <img src={require('./facebookSmall.png')} alt="tw" />
//                 </a>
//               </li>
//               <li>
//                 <a href="https://www.facebook.com/innovationmetalroofing">
//                   <img src={require('./facebookSmall.png')} alt="fb" />
//                 </a>
//               </li> */}
//             </ul>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }

export default NavigationBar;
