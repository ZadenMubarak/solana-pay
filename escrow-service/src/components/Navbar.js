import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import './Navbar.css'

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Dapp Logo" className="logo-image" />
          <Link to="/" className="logo-text">Escrow Service Dapp</Link>
        </div>
        <div className="navbar-links">
          <ul className="navbar-links-list">
            <li className="navbar-link-item">
              <Link to="/transactions" className="navbar-link">Transactions</Link>
            </li>
            <li className="navbar-link-item">
              <Link to="/account" className="navbar-link">Account</Link>
            </li>
            <li className="navbar-link-item">
              <button className="dark-mode-toggle" onClick={handleToggleDarkMode}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
