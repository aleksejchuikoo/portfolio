import React from 'react';
import { NavLink } from 'react-router-dom';

import './Sidebar.scss';

const Siderbar = () => {
  return (
    <div className="sidebar">
      <div className="logo"></div>
      <ul className="nav">
        <li className="nav__item">
          <NavLink to="/" className="nav__link">
            <span className="nav__link_text">home</span>
            <i class="fas fa-home nav__link-icon"></i>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/about" className="nav__link">
            <span className="nav__link_text">about</span>
            <i class="fas fa-address-card nav__link-icon"></i>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/skills" className="nav__link">
            <span className="nav__link_text">skills</span>
            <i class="fas fa-cogs nav__link-icon"></i>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/work" className="nav__link">
            <span className="nav__link_text">my work</span>
            <i class="fas fa-eye nav__link-icon"></i>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/contact" className="nav__link">
            <span className="nav__link_text">contact</span>
            <i class="fas fa-envelope nav__link-icon"></i>
          </NavLink>
        </li>
      </ul>
      <ul className="contacts">
        <li className="contacts__item">
          <a href="#" className="contacts__link">
            <i class="fab fa-vk"></i>
          </a>
        </li>
        <li className="contacts__item">
          <a href="#" className="contacts__link">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li className="contacts__item">
          <a href="#" className="contacts__link">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li className="contacts__item">
          <a href="#" className="contacts__link">
            <i class="fab fa-telegram-plane"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Siderbar;
