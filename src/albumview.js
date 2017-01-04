import React, { Component } from 'react';
import { Link } from 'react-router';
import data from './data';
import Photo from './photo';
import SideNav from './sidenav'

class AlbumView extends Component {
  render() {
    const { name } = this.props.params;
    const i = data.findIndex((album) => album.name === name);
    const album = data[i];
    return (
      <div className="AlbumView">
        <SideNav />
        <div className="AlbumDisplay">
        <h1>{name}</h1>
        <div className="AlbumList">
          {album.photos.map((photo, index) =>
            <Link to={`/album/${name}/${photo.name}`} className="Album" key={index}><Photo photo={photo} /></Link>
          )}
        </div>
        </div>
      </div>
    )
  }
}

export default AlbumView;
