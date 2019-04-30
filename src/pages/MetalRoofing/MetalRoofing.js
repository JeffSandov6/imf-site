import React, { Component } from 'react';
import './MetalRoofing.css';

class MetalRoofing extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Metal Roofing</h1>
        </div>

        <hr />

        <div className="toptext">
          <p>
            Innovate your home with the best roofers in the city. We do all
            types of standing seams or panels. We treat every roof like it's the
            roof to our own homes. Our roofers all have 30+ years of experience
            in the business. We provide both commercial and residential metal
            roofing.
          </p>
        </div>

        <div className="secondSection">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img
              src={require('./IMG_3840.jpg')}
              alt="idk1"
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="center">
              <div className="secHeader">Ready to Innovate At All Times</div>
              <hr />
              <p>
                Our skilled team is qualified for all types of custom metal
                work. We have a custom fabrication shop that will take care of
                anything your roof needs. Call now for a FREE estimate!
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="regHeader">Why Metal?</div>

          <hr />
          <ul>
            <li>
              <p>100% of metal roofs contain recycled steel or aluminum</p>
            </li>
            <li>
              <p>Increased home and resale value</p>
            </li>
            <li>
              <p>Durability and Strength</p>
            </li>
            <li>
              <p>Longetivity</p>
            </li>
          </ul>
          <p>
            There are many types of panels and standing seam procedures. Some
            metal roofs can support winds up to 140 mph and are perfect for
            beach houses. Metal roofs are innovative roofs for homes and come in
            all colors.
          </p>

          <hr />

          <p>
            <strong>Innovation:</strong> the introduction of something new, so
            as to replace an old method with something better.
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

        <div className="col-sm-12 col-md-12">
          <hr />
          <div className="p2">
            Email <strong>FREE QUOTES</strong> Call
          </div>
        </div>
      </div>
    );
  }
}

export default MetalRoofing;
