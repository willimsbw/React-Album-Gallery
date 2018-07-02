import React, { Component } from 'react';
import './App.css';
import Carousel from "./Carousel.js";
import Content from "./Content.js";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import {connect} from "react-redux";
import {load,
        applyFilter,
        toggleSidebar,
        selectCarouselPhotos,
        nextCarouselPhoto,
        previousCarouselPhoto,
        hideCarousel} from "../actions/appActions.js";

/*
* This renders the entire webapp. On inital render, until all data is loaded in from the three load()
* calls, it will display a page that says "loading..." Once the data is loaded in, it either renders
* an image carousel or a grid of album cards, depending on user behavior that alters the showCarousel
* state in the redux store.
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.applyFilter = this.applyFilter.bind(this);
  }

  applyFilter(user) {
    this.props.applyFilter(user);
  }

  /*
  * Executes three API calls to load in the data the app needs to function properly
  */
  componentDidMount() {
    this.props.load("albums");
    this.props.load("photos");
    this.props.load("users");
  }

  render() {
    /*
    * Displays a photo carousel if showCarousel in the redux store is set to true
    */
    if(this.props.carousel.showCarousel) {
      return (
        <div className="app">
          <Header onClick={this.props.hideCarousel} hideToggle={this.props.carousel.showCarousel} />
          <div className="main">
            <Carousel user={this.props.carousel.carouselUser} title={this.props.carousel.carouselTitle} photos={this.props.carousel.carouselPhotos} index={this.props.carousel.index} leftArrowClick={this.props.previousCarouselPhoto} rightArrowClick={this.props.nextCarouselPhoto} />
          </div>
        </div>
      );
    }

    /*
    * Displays a responsive grid of albums if showCarousel in the redux store is false and all
    * of the API calls from the load() functions in componentDidMount have finished
    */
    if(!this.props.photosLoading && !this.props.usersLoading && !this.props.albumsLoading) {
      return (
        <div className="app">
          <Header onClick={this.props.toggleSidebar} hideToggle={this.props.carousel.showCarousel}/>
          <div className="main">
            <Sidebar selectedUsers={this.props.selected.selectedIds} users={this.props.users} onChange={this.applyFilter} sidebarOpen={this.props.showSidebar}/>
            <Content onClick={this.props.selectCarouselPhotos} appState={this.props} />
          </div>
        </div>
      );
    }

    /*
    * If it's still waiting on the API call responses from the load() functions in componentDidMount
    * to finish, displays "Loading..."
    */
    return <div>Loading...</div>;

  }
}

const mapStateToProps = (state) => {
  return state.app;
};

export default connect(mapStateToProps, {load, applyFilter, toggleSidebar, hideCarousel, selectCarouselPhotos, nextCarouselPhoto, previousCarouselPhoto})(App);
