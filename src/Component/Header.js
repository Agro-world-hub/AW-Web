import React, { useState } from "react";
import "./Style/Header.css";
import logo from "../images/AgroWorld logo.png"; // Update the path to your logo file
import { Link } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            {/* Dropdown for "Solutions" */}
            <div className="dropdown">
              <a href="#solutions" className="nav-link" onClick={toggleDropdown}>
                Solutions▾
              </a>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link to="/InvestmentFarm" className="dropdown-link">Investment Farm Web</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/PlantCare" className="dropdown-link">PlantCare Mobile App</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/MarketPlace" className="dropdown-link">Marketplace Web</Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link contact-btn">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
