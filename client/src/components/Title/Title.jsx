import React from 'react';
import './Title.scss';

function Title({ children }) {
  return (
    <div className="title" data-text={children}>
      {children.split('').map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  );
}

export default Title;
