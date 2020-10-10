import React from 'react';
import './Text.scss';

function Text({ children, title, center }) {
  const textTitle = (
    <div className="text-title">
      I'm <span>Aleksej Chuiko</span>and I'm a Fullstack Developer from Minsk, Belarus.
    </div>
  );

  return (
    <div className="text" style={center && { textAlign: 'center' }}>
      {title && textTitle}
      {children}
    </div>
  );
}

export default Text;
