import React from 'react';
import bgHome from '../../assets/img/Home.jpg';

import './About.scss';

function About() {
  return (
    <div className="container">
      <img src={bgHome} alt="background" className="home-bg" />
      About
    </div>
  );
}

export default About;
