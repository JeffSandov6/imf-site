import React, { Component } from 'react';
import './MetalBuilding.css';

//TODO: customize the 6 containers, are they going to be pictures, or are they going to be text boxes?

class MetalBuilding extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Metal Roofing</h1>
        </div>
        <hr />
        <div className="mainText">
          <p>
            Metal buildings are great for storage, living spaces, man caves, or
            workshops. They come in all shapes and sizes, and in many colors.
            When you have more stuff than you do space, things can get
            complicated. IMF provides a simple solution in the form of a custom
            metal storage building that gives you all the extra space you may
            need. <br />
            Steel storage buildings are incredibly sturdy and customizable. You
            can select the color that works best for your home and landscape,
            and in addition, you can have windows and doors placed exactly where
            you want them. With Innovation Metal Roofing, just about anything is
            possible.
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

export default MetalBuilding;
