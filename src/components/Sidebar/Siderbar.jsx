import React from 'react';
import { Link } from 'react-router-dom';

import ContactItem from './ContactItem';
import NavItem from './NavItem';

import './Sidebar.scss';

const Siderbar = () => {
  const navItems = [
    { to: '/', name: 'home', icon: 'fas fa-home nav__link-icon' },
    { to: '/about', name: 'about', icon: 'fas fa-address-card nav__link-icon' },
    { to: '/skills', name: 'skills', icon: 'fas fa-cogs nav__link-icon' },
    { to: '/work', name: 'work', icon: 'fas fa-eye nav__link-icon' },
    { to: '/contact', name: 'contact', icon: 'fas fa-envelope nav__link-icon' },
  ];

  const contactItems = [
    { href: 'https://vk.com/aleksejchuiko', icon: 'fab fa-vk' },
    { href: 'https://www.linkedin.com/in/aleksej-chuiko-2a37481b6/', icon: 'fab fa-linkedin-in' },
    { href: 'https://www.instagram.com/aleksejchuiko/', icon: 'fab fa-instagram' },
    { href: 'https://github.com/aleksejchuikoo', icon: 'fab fa-github' },
  ];

  return (
    <div className="sidebar">
      <Link to="/" className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 213.01478576660156 147.00912475585938"
          overflow="visible">
          <defs id="SvgjsDefs14771"></defs>
          <g id="SvgjsG14772" transform="scale(1.0915438728222893)" opacity="1">
            <g
              id="SvgjsG14773"
              class="text"
              transform="translate(87.55, 114.63) scale(1)"
              light-content="false"
              fill="#aa06af">
              <path d="M74.7 -49C77.67 -54.37 81.27 -61.37 85.5 -69.99C89.72 -78.62 92.98 -84.5 95.26 -87.64C97.55 -90.78 100 -93.26 102.63 -95.09C103.89 -96.01 105.03 -98.52 106.06 -102.63C107.09 -106.74 107.6 -109.77 107.6 -111.71C107.6 -113.65 106.97 -114.63 105.72 -114.63C102.86 -114.63 94.86 -107.71 81.73 -93.89C62.2 -73.33 47.52 -58.54 37.69 -49.52C32.55 -49.52 26.21 -49.97 18.68 -50.89C14.79 -50.89 12.62 -48.77 12.16 -44.55C11.71 -42.72 15.13 -42.49 22.45 -43.86C25.87 -44.43 29.58 -44.83 33.58 -45.06C13.25 -26.33 -1.43 -13.59 -10.45 -6.85C-30.78 8.45 -46.89 16.11 -58.77 16.11C-71.22 16.11 -77.44 9.99 -77.44 -2.23C-77.44 -10.34 -74.22 -21.65 -67.76 -36.15C-61.31 -50.66 -51.89 -62.88 -39.49 -72.82C-27.1 -82.76 -16.45 -87.73 -7.54 -87.73C-3.2 -87.73 -0.03 -86.33 1.97 -83.53C3.97 -80.73 4.97 -77.04 4.97 -72.48C4.97 -67.91 3.03 -62.6 -0.86 -56.54L-6.51 -47.29C-6.51 -47.06 -6.31 -46.95 -5.91 -46.95C-5.51 -46.95 -5.14 -47 -4.8 -47.12C-1.26 -48.95 2.23 -53.29 5.65 -60.14C9.08 -66.99 10.79 -73.22 10.79 -78.82C10.79 -87.15 5.14 -91.32 -6.17 -91.32C-17.48 -91.32 -30.27 -86.15 -44.55 -75.82C-58.83 -65.48 -70.08 -53 -78.3 -38.38C-84.47 -27.41 -87.55 -17.02 -87.55 -7.2C-87.55 9.37 -78.76 18.39 -61.17 19.88C-60.37 19.99 -59.57 20.05 -58.77 20.05C-45.75 20.05 -27.7 11.65 -4.63 -5.14C10.79 -16.45 26.16 -29.58 41.46 -44.55L62.02 -45.06C53.23 -27.24 48.83 -12.56 48.83 -1.03C48.83 4.57 50.2 7.88 52.94 8.91C54.09 9.14 55.66 9.25 57.66 9.25C59.65 9.25 62.11 8.57 65.02 7.2C67.94 5.83 69.68 4.11 70.25 2.06C70.25 1.48 70.05 1.2 69.65 1.2C69.25 1.2 68.11 1.97 66.22 3.51C64.34 5.05 62.77 5.83 61.51 5.83C58.2 5.83 56.54 3.2 56.54 -2.06C56.54 -9.59 61.85 -23.76 72.48 -44.55C89.15 -45.69 97.49 -47 97.49 -48.49C97.49 -49.06 95.44 -49.35 91.32 -49.35ZM88.41 -90.81C75.16 -69.79 66.88 -56.03 63.57 -49.52C60.03 -49.52 57.06 -49.57 54.66 -49.69L44.55 -49.69Z"></path>
            </g>
          </g>
        </svg>
      </Link>
      <ul className="nav">
        {navItems.map((item) => (
          <NavItem {...item} />
        ))}
      </ul>
      <ul className="contacts">
        {contactItems.map((item) => (
          <ContactItem {...item} />
        ))}
      </ul>
    </div>
  );
};

export default Siderbar;
