import React from 'react';
import bgHome from '../../assets/img/Home.jpg';

import './Home.scss';

function Home() {
  return (
    <div className="container">
      <img src={bgHome} alt="background" className="home-bg" />
      Home
    </div>
  );
}

export default Home;
