import React, { Component } from 'react';
import {
  UncontrolledCarousel,
  CarouselItem,
  CarouselCaption,
  CarouselIndicators,
  CarouselControl,
  Carousel
} from 'reactstrap';
import PropTypes from 'prop-types';
import './RotatingImage.css';

class RotatingImage extends Component {
  render() {
    return (
      <div id="homeSlides" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
          <li data-target="#homeSlides" data-slide-to="0" class="active" />
          <li data-target="#homeSlides" data-slide-to="1" />
          <li data-target="#homeSlides" data-slide-to="2" />
        </ul>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={require('./IMG_3840.jpg')} alt="Los Angeles" />
          </div>
          <div class="carousel-item">
            <img src={require('./IMG_3841.jpg')} alt="Chicago" />
          </div>
          <div class="carousel-item">
            <img src={require('./IMG_3842.jpg')} alt="New York" />
          </div>
        </div>

        <a class="carousel-control-prev" href="#homeSlides" data-slide="prev">
          <span class="carousel-control-prev-icon" />
        </a>
        <a class="carousel-control-next" href="#homeSlides" data-slide="next">
          <span class="carousel-control-next-icon" />
        </a>
      </div>
    );
  }
}

export default RotatingImage;
