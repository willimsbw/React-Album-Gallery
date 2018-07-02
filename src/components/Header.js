import React, { Component } from 'react';
import PropTypes from "prop-types";

/*
* Renders a full-width sticky header. If a carousel is being displayed, it contains a close button.
* If not, it contains a 3-bars menu icon (hamburger button).
*/
class Header extends Component {
  render() {
    /*
    * If hideToggle is true, displays the header with a close button
    */
    if(this.props.hideToggle) {
      return (
        <nav className="header">
          <button onClick={this.props.onClick} className="header-button close-button">
            <i className="fas fa-times-circle"></i>
          </button>
        </nav>
      );
    }

    /*
    * Otherwise, displays a header with a toggle button (3-bars menu icon -- hamburger button)
    */
    return (
      <nav className="header">
        <button onClick={this.props.onClick} className="header-button sidebar-toggle" >
          <i className="fas fa-bars"></i>
        </button>
      </nav>
    );
  }
}

Header.propTypes = {
  /*
  * Boolean value telling the header which version to render
  */
  hideToggle: PropTypes.bool.isRequired,
  /*
  * Function called when the rendered button is clicked
  */
  onClick: PropTypes.func.isRequired,
}

export default Header
