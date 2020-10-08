import React from 'react';

const ContactItem = ({ href, icon }) => {
  return (
    <li className="contacts__item">
      <a href={href} target="_blank" className="contacts__link" rel="noopener noreferrer">
        <i class={icon}></i>
      </a>
    </li>
  );
};

export default ContactItem;
