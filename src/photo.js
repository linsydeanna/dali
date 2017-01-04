import React, { Component } from 'react';

class Photo extends Component {
  render() {
    return (
      <div>
        {this.props.photo.name}
        <img src={this.props.photo.photo_url} alt="single"/>
      </div>
    )
  }
}

export default Photo;
