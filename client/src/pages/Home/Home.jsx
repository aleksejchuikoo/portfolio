import React from 'react';
import { Link } from 'react-router-dom';

import photo from '../../assets/img/photo.jpg';
import Button from '../../UI/Button';

import './Home.scss';

function Home() {
  return (
    <div className="wrapper">
      <div className="wrapper-left">
        <div className="home-title">
          <span>Hi,</span>
          <span>I'm Aleksej,</span>
          <span>web developer.</span>
          <div className="home-subtitle">Fullstack Developer</div>
          <Link to="/contact">
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
      <div className="wrapper-right">
        <div className="home-photo">
          <img src={photo} alt="Developer" />
        </div>
      </div>
    </div>
  );
}

export default Home;
