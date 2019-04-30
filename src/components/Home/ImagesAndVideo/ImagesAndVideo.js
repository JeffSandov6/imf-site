import React, { Component } from 'react';
import './ImagesAndVideo.css';

class ImagesAndVideo extends Component {
  render() {
    return (
      <div className="ImagesAndVideo">
        <div class="row">
          <div class="column">
            <img
              src={require('./IMG_3841.jpg')}
              alt="idk1"
              style={{ width: '100%' }}
            />
          </div>
          <div class="column">
            {/* <img src="idk.jpg" alt="idk1" style={{width:'100%'}}/> */}
            <video style={{ width: '100%' }} controls>
              <source
                src={require('./bvbhoffenheim.mp4')}
                type="video/mp4"
                style={{ width: '100%' }}
              />
            </video>
          </div>
          <div class="column">
            <img
              src={require('./IMG_3841.jpg')}
              alt="idk1"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ImagesAndVideo;
