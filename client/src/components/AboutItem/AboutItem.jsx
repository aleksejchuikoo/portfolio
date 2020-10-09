import React from 'react';
import './AboutItem.scss';

function AboutItem({ icon, title, text }) {
  return (
    <li className="about__item">
      <div className="about__item-icon">
        <i className={`${icon} about-icon`} />
      </div>
      <div className="about__item-info">
        <div className="about__item-title">{title}</div>
        <div className="about__item-tetx">{text}</div>
      </div>
    </li>
  );
}

export default AboutItem;
