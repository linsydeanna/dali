import React, { Component } from 'react';

class Album extends Component {
  render() {
    return (
      <div>
        {this.props.album.name}
        <img src={this.props.album.cover_photo_url} alt="cover"/>
      </div>
    )
  }
}

export default Album;
