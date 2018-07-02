import React, { Component } from 'react';
import PropTypes from "prop-types";

/*
* This component renders a card for an album with a thumbnail of the album's first photo, the
* creator's username, and the album's title. When the thumbnail is clicked, it re-renders the app
* to display an image carousel containing all photos in the album
*/
class Album extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.albumId);
  }

  render() {
    return (
      <div className="album-card">
        <div className="album-img-container">
          <img className="album-img" src={this.props.thumbnail} alt={this.props.alt} />
          <a href="#" onClick={this.handleClick}>
            <div className="overlay">
              <div className="overlay-text">Click to view full album</div>
            </div>
          </a>
        </div>
        <br />
        <p className="album-user"> {this.props.username} </p>
        <p className="album-title"> {this.props.albumTitle} </p>
      </div>
    );
  }
}

Album.propTypes = {
  /*
  * Redux action used to tell the carousel what album to display and re-render the page to show the
  * carousel
  */
  onClick: PropTypes.func.isRequired,
  /*
  * Thumbnail image to display on the album card
  */
  thumbnail: PropTypes.string.isRequired,
  /*
  * Username of the album's creator
  */
  username: PropTypes.string.isRequired,
  /*
  * alt text for the thumbnail image
  */
  alt: PropTypes.string.isRequired,
  /*
  * Id number of the album
  */
  albumId: PropTypes.number.isRequired,
  /*
  * The album's title
  */
  albumTitle: PropTypes.string.isRequired,
}

export default Album;
