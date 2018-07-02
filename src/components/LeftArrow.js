import React, { Component } from 'react';
import PropTypes from "prop-types";

/*
* Button containing a left-pointing chevron. Used by Carousel to cycle through images.
*/
class LeftArrow extends Component {
  render() {
    return (
    <button onClick={this.props.onClick} className="arrow left-arrow">
      <i className="fas fa-chevron-left"></i>
    </button>
  );
  }
}

LeftArrow.propTypes = {
  /*
  * Function to be run when the button is clicked
  */
  onClick: PropTypes.func.isRequired,
}

export default LeftArrow;
