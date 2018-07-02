import axios from "axios";

export function load(data) {
  let url = "https://jsonplaceholder.typicode.com/" + data
  return (dispatch) => {
    dispatch(loadStart(data));
    return axios.get(url).then((response) => {
      dispatch(loadSuccess(data, response.data));
    })
    .catch(error => dispatch(loadError(data, error)));
  };
}

export function loadStart(data) {
  return {
    type: "LOAD_" + data.toUpperCase() + "_START",
  };
}

export function loadError(data, error) {
  return {
    type: "LOAD_" + data.toUpperCase() + "_ERROR",
    payload: error,
  };
}

export function loadSuccess(data, response) {
  return {
    type: "LOAD_" + data.toUpperCase() + "_SUCCESS",
    payload: response,
  };
}

export function applyFilter(user) {
  return {
    type: "APPLY_FILTER",
    payload: user
  };
}

export function toggleSidebar() {
  return {
    type: "TOGGLE_SIDEBAR",
  };
}

export function selectCarouselPhotos(albumId) {
  return {
    type: "SELECT_CAROUSEL_PHOTOS",
    payload: albumId
  };
}

export function nextCarouselPhoto() {
  return {
    type: "NEXT_CAROUSEL_PHOTO",
  };
}

export function previousCarouselPhoto() {
  return {
    type: "PREVIOUS_CAROUSEL_PHOTO",
  };
}

export function hideCarousel() {
  return {
    type: "HIDE_CAROUSEL",
  };
}
