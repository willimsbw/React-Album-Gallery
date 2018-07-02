import React, { Component } from 'react';
import PropTypes from "prop-types";

/*
* Button containing a right-pointing chevron. Used by Carousel to cycle through images.
*/
class RightArrow extends Component {
  render() {
    return (
      <button onClick={this.props.onClick} className="arrow right-arrow">
        <i className="fas fa-chevron-right"></i>
      </button>
    );
  }
}

RightArrow.propTypes = {
  /*
  * Function to be run when the button is clicked
  */
  onClick: PropTypes.func.isRequired,
}

export default RightArrow;
