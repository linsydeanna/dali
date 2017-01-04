import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import data from './data';

class SideNav extends Component {
  viewAlbum(albumName) {
    hashHistory.push(`/album/${albumName}`)
  }

  hideSideNav() {
    console.log("Need Redux for this")
  }

  render() {
    return (
      <div className="SideNav">
        <Link to="/"><p>Albums</p></Link>
        <p onClick={() => this.hideSideNav()}>Hide SideNav</p>
        <div className="SideNavAlbumList">
          {data.map((album, index) =>
            <p key={index} onClick={() => this.viewAlbum(album.name)}>{album.name}</p>
          )}
        </div>
      </div>
    )
  }
}

export default SideNav;
