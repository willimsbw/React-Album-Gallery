import React, { Component } from "react";
import Album from "./Album.js";
import PropTypes from "prop-types";

/*
* This component renders an album card for every album stored in selected.selectedAlbums in the redux
* store.
*/
class Content extends Component {
  render () {
    return (
      <div className="albums-container">
        {
          this.props.appState.selected.selectedAlbums.map(album => {
            let user = this.props.appState.users.filter(user => user.id === album.userId)[0];
            let username = user.username;
            let photo = this.props.appState.photos.filter(photo => photo.albumId === album.id)[0];
            let thumbnail = photo.url;
            let alt = photo.title;
            return <Album key={album.id} onClick={this.props.onClick} thumbnail={thumbnail} username={username} alt={alt} albumId={album.id} albumTitle={album.title} />;
          })
        }
      </div>
    );
  }
}

Content.propTypes = {
  /*
  * The function that will be run when an album's thumbnail is clicked
  */
  onClick: PropTypes.func.isRequired,
  /*
  * State.app from the redux store - basically the entire state.
  */
  appState: PropTypes.object.isRequired,
}

export default Content;
