import React, { Component } from 'react';
import './HomeLander.css';
import RotatingImage from '../RotatingImage/RotatingImage';

class HomeLander extends Component {
  render() {
    return (
      <div className="HomeLander" style={{ backgroundColor: '#D3D3D3' }}>
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <div className="logo">
              <img
                src={require('./flogo_RGB_HEX-512.png')}
                alt="missingpic"
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-3" />
          <div className="col-sm-12 col-md-6">
            <div className="rotatingBox">
              <RotatingImage />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeLander;
