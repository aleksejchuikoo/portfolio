import React from 'react';
import './Title.scss';

function Title({ children }) {
  return (
    <div className="title" data-text={children}>
      {children
        .split('')
        .map((item, index) =>
          !!item.trim() ? (
            <span key={index}>{item}</span>
          ) : (
            <span className="space" key={index}></span>
          ),
        )}
    </div>
  );
}

export default Title;
