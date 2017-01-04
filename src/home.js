import React, { Component } from 'react';
import GalleryView from './galleryview';
import './styles/home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="ColumnContainer">
        <div className="ColumnOne Column">
          <p className="LetterD">D</p>
        </div>
        <div className="ColumnTwo Column">
          <p className="LetterA">A</p>
        </div>
        <div className="ColumnThree Column">
          <p className="LetterL">L</p>
        </div>
        <div className="ColumnFour Column">
          <p className="LetterI">i</p>
        </div>
        </div>
        <h1>The Works of Salvador Dali</h1>
        <GalleryView />
      </div>
    )
  }
}

export default Home;
