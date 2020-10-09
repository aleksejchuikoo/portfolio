import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, name, icon }) => {
  return (
    <li className="nav__item">
      <NavLink to={to} className="nav__link" activeClassName="nav__link-active" exact>
        <span className="nav__link_text">{name}</span>
        <i className={icon} />
      </NavLink>
    </li>
  );
};

export default NavItem;
