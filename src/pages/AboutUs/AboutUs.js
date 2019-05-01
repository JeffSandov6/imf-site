import React, { Component } from 'react';
import './AboutUs.css';

//TODO: need smaller images to really make this site look nice
//      maybe change the content of the text, especially towards the end, and
//      do some fact checking

class MetalBuilding extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>About Us (Why Us?)</h1>
        </div>
        <hr />
        <div className="mainText">
          <p>
            Innovation Metal Roofing is more than just a company of roofers. We
            are a family that treats every roof as if it were our own. We've
            believes in "Innovating One Roof At A Time" since the very first day
            we got into the business. Here, at Innovation Metal Roofing, we are
            dedicated to quality and we assure nothing less than 100%
            professional work. Everything we construct is perfectly designed to
            give our customers the best combination of longetivity and
            affordability.
          </p>
        </div>

        <div className="middleSection">
          <hr />
          <div className="col-sm-12 col-md-4">
            <div className="row" />
            {/* <div className="row"> */}
            <div className="image">
              <img
                src={require('./IMG_3840.jpg')}
                alt="idk1"
                style={{ width: '100%' }}
                height="50%"
              />
            </div>
            {/* </div> */}
            {/* <div className="row"> */}
            <div className="image">
              <img
                src={require('./IMG_3840.jpg')}
                alt="idk1"
                style={{ width: '100%' }}
              />
            </div>
            {/* </div> */}
          </div>
          <div className="col-sm-12 col-md-8">
            <ul>
              <li>
                <p>
                  We make sure all material is properly inspected in order to
                  assure quality before installation.
                </p>
              </li>
              <li>
                <p>
                  We are for the people, in which, we have 50+ years of
                  experience, so we guarantee quality work.
                </p>
              </li>
              <li>
                <p>
                  We are OSHA safety certified, so safety will always be our #1
                  priority.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md-12">
          <hr />
          <p>
            Our engineering expertice is second to none. All of our roofs are
            made with time, quality, and most importantly, Innovation. We are
            here to make a difference, rather than to compete with others.
          </p>
        </div>
      </div>
    );
  }
}

export default MetalBuilding;
