import React from 'react';
import { Link } from 'react-router-dom';

import photo from '../../assets/img/photo.jpg';
import Button from '../../UI/Button';

import './Home.scss';

function Home() {
  return (
    <div className="home">
      <div className="home-left">
        <div className="home-title">
          <span>Hi,</span>
          <span>I'm Aleksej,</span>
          <span>web developer.</span>
          <div className="home-subtitle">Fullstack Developer</div>
          <Link to="/contact">
            <Button>Contact me!</Button>
          </Link>
        </div>
      </div>
      <div className="home-right">
        <div className="home-photo">
          <img src={photo} alt="Developer" />
        </div>
      </div>
    </div>
  );
}

export default Home;
