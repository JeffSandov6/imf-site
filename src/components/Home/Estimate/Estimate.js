import React, { Component } from 'react';
import './Estimate.css';

class Estimate extends Component {
  render() {
    return (
      <div className="Estimate">
        <div className="contact-form">
          <p1>Get Free Estimate</p1>
          <div className="text-boxes">
            <form
              action="mailto:jeffrysandoval24@gmail.com"
              method="post"
              encType="text/plain"
            >
              <h2>Enter your name below</h2>
              <input type="text" name="name" />
              <h2>Enter your phone number below</h2>
              <input type="text" name="phoneNumber" />
              <h2>Enter your email below</h2>
              <input type="text" name="email" />
              <h2>Enter your message below</h2>
              <textarea rows="6" cols="50" />
              <h2 />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Estimate;
