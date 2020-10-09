import React from 'react';
import AboutItem from '../../components/AboutItem/AboutItem';
import Text from '../../components/Text/Text';
import Title from '../../components/Title/Title';

import './About.scss';

function About() {
  const aboutItems = [
    {
      icon: 'fas fa-tachometer-alt',
      title: 'Fast',
      text: 'Fast load times and lag free interaction, my highest priority.',
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Responsive',
      text: 'My layouts will work on any device, big or small.',
    },
    {
      icon: 'fas fa-brain',
      title: 'Intuitive',
      text: 'Strong preference for easy to use, intuitive UX/UI.',
    },
    {
      icon: 'fas fa-rocket',
      title: 'Dynamic',
      text: "Websites don't have to be static, I love making pages come to life.",
    },
  ];

  return (
    <div className="wrapper">
      <div className="wrapper-left">
        <div className="wrapper-info">
          <Title>About me</Title>
          <ul className="about__items">
            {aboutItems.map((item, index) => (
              <AboutItem {...item} key={index} />
            ))}
          </ul>
        </div>
      </div>
      <div className="wrapper-right"></div>
    </div>
  );
}

export default About;
