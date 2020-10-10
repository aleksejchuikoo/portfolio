import React from 'react';
import './AboutItem.scss';

function AboutItem({ icon, title, text }) {
  return (
    <div className="about__item">
      <div className="about__item-icon">
        <i className={`${icon} about-icon`} />
      </div>
      <div className="about__item-info">
        <h2 className="about__item-title">{title}</h2>
        <span className="about__item-text">{text}</span>
      </div>
    </div>
  );
}

export default AboutItem;
