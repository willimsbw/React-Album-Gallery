import React, { Component } from "react";
import LeftArrow from "./LeftArrow.js";
import PropTypes from "prop-types";
import RightArrow from "./RightArrow.js";

/*
* Renders a photo carousel that displays a single photo at a time from an array of photos with right
* and left arrow overlays. Clicking the arrows will show the next or previous photo in the array. It
* will loop to the last photo if LeftArrow is clicked on the first photo in the array, or the first
* photo if RightArrow is clicked on the last photo in the array.
*/
class Carousel extends Component {
  render () {
    let photos = this.props.photos;
    let i = this.props.index;
    return (
      <div className="carousel-container">
        <div className="carousel">
          <div className="carousel-photo-container">
            <img className="carousel-photo" src={photos[i].url} alt={photos[i].title} id={photos[i].id} />
            <div className="overlay carousel-overlay">
              <LeftArrow onClick={this.props.leftArrowClick} />
              <RightArrow onClick={this.props.rightArrowClick} />
            </div>
          </div>
          <p className="album-user">{this.props.user}</p>
          <p className="album-title">{this.props.title}</p>
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  /*
  * The username of the album's creator
  */
  user: PropTypes.string,
  /*
  * The title of the album
  */
  title: PropTypes.string,
  /*
  * The photos displayed by the carousel
  */
  photos: PropTypes.array.isRequired,
  /*
  * The index of the currently-visible photo in the array passed to the photos prop
  */
  index: PropTypes.number.isRequired,
  /*
  * The function that decrements the carousel.index state in the redux store
  */
  leftArrowClick: PropTypes.func.isRequired,
  /*
  * The function that increments the carousel.index state in the redux store
  */
  rightArrowClick: PropTypes.func.isRequired,
}

export default Carousel;
