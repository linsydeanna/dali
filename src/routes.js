import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import GalleryView from './galleryview';
import AlbumView from './albumview';
import PhotoView from './photoview';
import Home from './home';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/galleryview" component={GalleryView}/>
      <Route path="/album/:name" component={AlbumView}/>
      <Route path="/album/:name/:photo" component={PhotoView}/>
    </Route>
  </Router>
)

export default routes;
