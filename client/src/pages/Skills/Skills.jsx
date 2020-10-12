import React from 'react';
import Title from '../../components/Title/Title';

import './Skills.scss';

function Skills() {
  return (
    <div className="wrapper">
      <div className="wrapper-left">
        <div className="wrapper-info" style={{maxWidth: 580, fontSize: 50}}>
          <Title>Skills & Experience</Title>
        </div>
      </div>
      <div className="wrapper-right"></div>
    </div>
  );
}

export default Skills;
