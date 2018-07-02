let defaultState = {
  users: [],
  photos: [],
  albums: [],
  showSidebar: false,
  photosLoading: true,
  usersLoading: true,
  albumsLoading: true,
  photosError: null,
  usersError: null,
  albumsError: null,
  selected:
    {
      selectedAlbums: [],
      selectedIds: [],
    },
  carousel:
    {
      index: 0,
      carouselPhotos: [],
      showCarousel: false,
      carouselUser: "",
      carouselTitle: "",
    }
}

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case "LOAD_ALBUMS_START": {
      state = {...state, albumsLoading: true, albumsError: null};
      break;
    }
    case "LOAD_PHOTOS_START": {
      state = {...state, photosLoading: true, photosError: null};
      break;
    }
    case "LOAD_USERS_START": {
      state = {...state, usersLoading: true, usersError: null};
      break;
    }
    /*
    * Once all albums are loaded from an API call, also adds all albums and their creators' id's to
    * selected.selectedAlbums and selected.selectedIds so that the default initial render includes
    * all albums
    */
    case "LOAD_ALBUMS_SUCCESS": {
      let ids = []
      for(let i = 0; i<action.payload.length; i++) {
        if(!ids.includes(action.payload[i].userId)) {
          ids.push(action.payload[i].userId);
        }
      }
      state = {...state, albumsLoading: false, albums: action.payload, selected: {selectedAlbums:action.payload, selectedIds: ids}};
      break;
    }
    case "LOAD_PHOTOS_SUCCESS": {
      state = {...state, photosLoading: false, photos: action.payload};
      break;
    }
    case "LOAD_USERS_SUCCESS": {
      state = {...state, usersLoading: false, users: action.payload};
      break;
    }
    case "LOAD_ALBUMS_ERROR": {
      state = {...state, albumsLoading: false, albumsError: action.payload.error};
      break;
    }
    case "LOAD_PHOTOS_ERROR": {
      state = {...state, photosLoading: false, photosError: action.payload.error};
      break;
    }
    case "LOAD_USERS_ERROR": {
      state = {...state, usersLoading: false, usersError: action.payload.error};
      break;
    }
    /*
    * Looks in selected.selectedIds to see if the user that was checked or unchecked is currently
    * displayed. If not, adds that user's albums to what's being rendered (selected.selectedAlbums).
    * If so, removes them from what's being rendered.
    */
    case "APPLY_FILTER": {
      let userId = action.payload;
      let newAlbums = [];
      let newIds = [];
      if(state.selected.selectedIds.includes(userId)) {
        newAlbums = state.selected.selectedAlbums.filter(album => album.userId !== userId);
        newIds = state.selected.selectedIds.filter(id => id !== userId);
      } else {
        let extraAlbums = state.albums.filter(album => album.userId === userId);
        newAlbums = state.selected.selectedAlbums.map(album => album);
        extraAlbums.forEach(album => newAlbums.push(album));
        newIds = state.selected.selectedIds.map(id => id);
        newIds.push(userId);
      }
      state = {...state, selected: {selectedAlbums: newAlbums, selectedIds: newIds}};
      break;
    }
    case "TOGGLE_SIDEBAR": {
      let sidebarState = !state.showSidebar;
      state = {...state, showSidebar: sidebarState};
      break;
    }
    /*
    * Adds the photos from the album identified by the payload to carousel.carouselPhotos
    */
    case "SELECT_CAROUSEL_PHOTOS": {
      let albumId = action.payload;
      let album = state.albums.filter(album => album.id === albumId)[0];
      let photos = state.photos.filter(photo => photo.albumId === albumId);
      let username = state.users.filter(user => user.id === album.userId)[0].username;
      state = {...state, carousel: {carouselPhotos: photos, index: 0, showCarousel: true, carouselUser: username, carouselTitle: album.title}};
      break;
    }
    case "NEXT_CAROUSEL_PHOTO": {
      let lastIndex = state.carousel.carouselPhotos.length-1
      let newIndex = state.carousel.index === lastIndex ? 0 : state.carousel.index+1;
      state = {...state, carousel: {carouselPhotos: state.carousel.carouselPhotos, index: newIndex, showCarousel: true, carouselUser: state.carousel.carouselUser, carouselTitle: state.carousel.carouselTitle}};
      break;
    }
    case "PREVIOUS_CAROUSEL_PHOTO": {
      let lastIndex = state.carousel.carouselPhotos.length-1
      let newIndex = state.carousel.index === 0 ? lastIndex : state.carousel.index-1;
      state = {...state, carousel: {carouselPhotos: state.carousel.carouselPhotos, index: newIndex, showCarousel: true, carouselUser: state.carousel.carouselUser, carouselTitle: state.carousel.carouselTitle}};
      break;
    }
    case "HIDE_CAROUSEL": {
      state = {...state, carousel: {showCarousel: false}};
      break;
    }
    default: {
      break;
    }
  }
  return state;
}

export default reducer;
