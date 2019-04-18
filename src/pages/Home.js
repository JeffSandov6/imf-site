import React, { Component } from 'react';
import { Card, Col, Row } from 'reactstrap';
// import './Home.css';
import RotatingImage from '../components/Home/RotatingImage/RotatingImage';
import Estimate from '../components/Home/Estimate/Estimate';
import ImagesAndVideo from '../components/Home/ImagesAndVideo/ImagesAndVideo';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="Home">
          <div className="lander">
            <h1>Innovation Metal Roofing</h1>
            <p>Sample text</p>
          </div>
        </div>
        <div>
          <ImagesAndVideo />
        </div>
        <div>
          <Estimate />
        </div>

        {/* <div>
            <Card className="carouselStyle">
              <RotatingImage />
            </Card>
        </div> */}
      </div>
    );
  }
}

export default Home;
