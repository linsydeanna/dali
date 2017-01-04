import React, { Component } from 'react';
// import { Link } from 'react-router';
import data from './data';
import Photo from './photo';
import Modal from 'react-modal';
import SideNav from './sidenav';

class PhotoView extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      photoDisplayed: 0
    }
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    })
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    })
  }

  switchPhotoLeft() {
    let lastPhoto;
    console.log("this.state.photoDisplayed is ", this.state.photoDisplayed);
    if (this.state.photoDisplayed === 0) {
      lastPhoto = 2
    } else {
      lastPhoto = this.state.photoDisplayed - 1;
    }
    this.setState({
      photoDisplayed: lastPhoto
    })
    console.log("this.state.photoDisplayed at end of function is ", this.state.photoDisplayed);
  }

  switchPhotoRight() {
    let nextPhoto;
    console.log("this.state.photoDisplayed is ", this.state.photoDisplayed);
    if (this.state.photoDisplayed === 2) {
      nextPhoto = 0
    } else {
      nextPhoto = this.state.photoDisplayed + 1;
    }
    this.setState({
      photoDisplayed: nextPhoto
    })
    console.log("this.state.photoDisplayed at end of function is ", this.state.photoDisplayed);
  }

  render() {
    const { photo } = this.props.params;
    const currentAlbum = data.filter((album) => album.name === this.props.params.name);
    const photoClicked = currentAlbum[0].photos.filter((albumPhoto) => albumPhoto.name === photo);
    const photoIndex = this.state.photoDisplayed;
    return (
      <div className="AlbumView">

        <SideNav />

        <div className="Album" onClick={() => this.openModal()}>
          {photoClicked.map((photo, index) =>
            <Photo key={index} photo={photo} />
          )}

          <Modal isOpen={this.state.modalIsOpen} contentLabel="modal">
            <div className="AlbumList">
              <p onClick={() => this.switchPhotoLeft()}>Last Photo</p>
              <Photo photo={currentAlbum[0].photos[photoIndex]} className="Album" />
              <p onClick={() => this.switchPhotoRight()}>Next Photo</p>
            </div>
            <div onClick={() => this.closeModal()}>X</div>
          </Modal>

        </div>

      </div>
    )
  }
}

export default PhotoView;
