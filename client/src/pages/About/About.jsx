import React from 'react';

import Title from '../../components/Title/Title';
import Text from '../../components/Text/Text';
import AboutItem from '../../components/AboutItem/AboutItem';

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
          <Text title>
            I enjoy taking complex problems and turning them into simple and beautiful interface
            designs. I also love the logic and structure of coding and always strive to write
            elegane and efficient code. When I'm not coding, you'll find me in the gym or or reading
            a book.
          </Text>
        </div>
      </div>
      <div className="wrapper-right">
        <div className="wrapper-info">
          {aboutItems.map((item, index) => (
            <AboutItem {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
