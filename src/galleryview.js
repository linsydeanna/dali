import React, { Component } from 'react';
import { Link } from 'react-router';
import data from './data';
import Album from './album';

class GalleryView extends Component {
  render() {
    return (
      <div className="AlbumList">
      {data.map((album, index) =>
        <Link className="Album" key={index} to={`/album/${album.name}`}>
          <Album album={album}></Album></Link>
      )}
      </div>
    )
  }
}

export default GalleryView;
