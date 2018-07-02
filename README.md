# Photo Album Gallery

This is a simple, responsive web app built with React/Redux that displays a grid of cards, each representing
a photo album. Each card has a thumbnail of the album's first photo, the username of the album's
creator, and the title of the album. You can filter this grid view by user. When an album's
thumbnail is clicked, it will display an image carousel containing all of the photos contained within
that album.

## Getting Started

This app was built using the framework provided by Facebook's create-react-app. So if you
have node.js installed, you can open your favorite terminal, navigate to the directory you downloaded these files to, and run:

```
npm start
```

This will open a new tab in your web browser with the url http://localhost:3000 and power that domain
with a development server serving up this web app.

### Prerequisites

This web app relies on the following packages. Using **npm start** to serve up this app on a local
development server should work even if you have not manually installed these dependencies:

* [node.js](https://nodejs.org/en/)
* [redux](https://redux.js.org/)
* [react-redux](https://redux.js.org/basics/usage-with-react#installing-react-redux)
* [redux-thunk](https://github.com/reduxjs/redux-thunk)
* [axios](https://github.com/axios/axios)

If the app isn't running correctly, try installing them manually:

* Once node.js is installed, you can use the node packet manager to install these dependencies:

```
npm install redux
npm install react-redux
npm install redux-thunk
npm install axios
```

You will also need an internet connection and a web browser to run this web app.

## Deployment

Because this app was built with create-react-app, the CreateReactAppREADME.md file contains directions
for several ways to deploy this application. Please refer to that file's deployment section, noted in
the table of contents at line -82.

## Built With

* [node.js](https://nodejs.org/en/)
* [redux](https://redux.js.org/)
* [react-redux](https://redux.js.org/basics/usage-with-react#installing-react-redux)
* [redux-thunk](https://github.com/reduxjs/redux-thunk)
* [axios](https://github.com/axios/axios)
* [Font Awesome v5](https://fontawesome.com/)
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## Author

* **Bryan Williams** - [willimsbw](https://github.com/willimsbw)

## Acknowledgments

* An acknowledgment for Udacity and FreeCodeCamp, whose educational content has helped me learn both specific skills and how to teach myself new technologies
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2), for providing this really great readme template
