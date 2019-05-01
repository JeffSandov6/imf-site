import React, { Component } from 'react';
import './RoofMnR.css';

//TODO: customize the 6 containers, are they going to be pictures, or are they going to be text boxes?

class RoofMnR extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Roof Maintenance & Repair</h1>
        </div>
        <hr />

        <div className="mainText">
          <p>
            Routine roof maintenance and proper periodic inspections are key
            elements to extending the life of your roof. The main purpose is to
            locate and resolve problems early, before they become big and
            ultimately, costly to fix. By having a roof maintenance contract
            with Innovation Metal Roofing, you will save a lot of money in the
            long run, and you'll get more years out of your roof.
          </p>
        </div>

        <div className="col-sm-12 col-md-12">
          <div className="column">
            <img
              src={require('./IMG_3840.jpg')}
              alt="idk1"
              style={{ width: '100%' }}
            />
          </div>
          <div className="column">
            <img
              src={require('./IMG_3840.jpg')}
              alt="idk1"
              style={{ width: '100%' }}
            />
          </div>
          <div className="column">
            <img
              src={require('./IMG_3840.jpg')}
              alt="idk1"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RoofMnR;
