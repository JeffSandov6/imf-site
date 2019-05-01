import React, { Component } from 'react';
import './RoofMnR.css';

//TODO: Get the appropriate pictures for the 3 picture containers

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
        <hr />
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

        <div className="col-sm-12 col-md-12">
          <hr />
          <div className="mainText">
            <p>
              Small and little problems can easily turn into a big issue for
              your roof. Ensuring that detect those potential issues early is
              pivotal to do early, whilst the solution is still inexpensive and
              while your building is still unharmed. Your roof is one of the
              most valuable assets for your home, protect it.
            </p>
          </div>
        </div>

        <div className="col-sm-12 col-md-12">
          <hr />
          <div className="p1">
            <u>What we look for?</u>
          </div>
          <div className="mainText">
            <ol>
              <p>
                <li>
                  <p>Inspection of any holes or dents in metal roof panels</p>
                </li>
                <li>
                  <p>Membrane and flashing deterioration</p>
                </li>
                <li>
                  <p>Visually inspect for any possible drainage</p>
                </li>
                <li>
                  <p>Examine all metal flashing and valleys for rust</p>
                </li>
                <li>
                  <p>Loose metal flashing</p>
                </li>
                <li>
                  <p>Loose caulking</p>
                </li>
                <li>
                  <p>
                    Determine the most effective measure in repairing and
                    maintaining your roof
                  </p>
                </li>
              </p>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default RoofMnR;
