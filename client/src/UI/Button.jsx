import React from 'react';
import './Button.scss';

const Button = ({ children, type, name }) => {
  return (
    <button type={type ? type : null} className={`btn ${name ? name : null}`}>
      {children}
    </button>
  );
};

export default Button;
