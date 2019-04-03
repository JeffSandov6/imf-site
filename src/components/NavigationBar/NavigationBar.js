import React, { Component } from 'react';
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import './NavigationBar.css';

// class NavigationBar extends Component {
//     render() {
//       return (
//         <div>
//           <nav class="navbar navbar-default" role="navigation">
//             <div class="navbar-header">
//               <button
//                 type="button"
//                 class="navbar-toggle"
//                 data-toggle="collapse"
//                 data-target=".navbar-collapse"
//               >
//                 <span class="icon-bar" />
//                 <span class="icon-bar" />
//                 <span class="icon-bar" />
//               </button>
//             </div>
//             <div class="navbar-collapse collapse">
//               <ul class="nav navbar-nav">
//                 <li>
//                   <a href="#">Left</a>
//                 </li>
//               </ul>
//               <ul class="nav navbar-nav navbar-right">
//                 <li>
//                   <a href="#">Right</a>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </div>
//       );
//     }
//   }

// if you want something in the center of the nav bar, add this right before navbar right
{
  /* <ul class="nav navbar-nav navbar-center">
<li>
  <a href="#">Center</a>
</li>
<li>
  <a href="#">Center</a>
</li>
<li>
  <a href="#">Center</a>
</li>
</ul> */
}

class NavigationBar extends Component {
  render() {
    return (
      <div className="NavigationBar">
        <nav class="navbar navbar-default" role="navigation">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </button>
          </div>
          <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <Navbar.Text>832-316-4214</Navbar.Text>
              <Navbar.Text>innovationmetalroofing@gmail.com</Navbar.Text>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="https://www.instagram.com/">
                  <img src="./facebookSmall.png" alt="ig" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <img src="./facebookSmall.png" alt="tw" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <img src="./facebookSmall.png" alt="fb" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavigationBar;
