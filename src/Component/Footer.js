import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Style/Footer.css';
import logo from '../images/AgroWorld logo.png'; // Replace with your logo image path
import { FaLinkedin, FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <img src={logo} alt="AgroWorld Logo" className="footer-logo" />
          <p>
            No. 14, Sir Baron Jayathilake Mawatha,
            <br /> Colombo 01, Western 00100, LK
          </p>
          <p>
            <a href="mailto:info@agroworld.lk">info@agroworld.lk</a>
          </p>
        </div>

        {/* Short Links */}
        <div className="footer-section">
          <h4>SHORT LINKS</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="footer-section">
          <h4>SOLUTIONS</h4>
          <ul>
            <li>
              <Link to="/InvestmentFarm">InvestorFarm</Link>
            </li>
            <li>
              <Link to="/PlantCare">PlantCare</Link>
            </li>
            <li>
              <Link to="/MarketPlace">Marketplace</Link>
            </li>
          </ul>
        </div>

        {/* Follow */}
        <div className="footer-section">
          <h4>FOLLOW</h4>
          <div className="footer-icons">
            <a href="https://www.linkedin.com/company/agro-world-one/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://play.google.com" target="_blank" rel="noreferrer">
              <FaGooglePlay />
            </a>
            <a href="https://apple.com/app-store" target="_blank" rel="noreferrer">
              <FaApple />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <Link to="/terms">TERMS & CONDITIONS</Link>
        <Link to="/privacy">PRIVACY POLICY</Link>
        <p>&copy; 2024 AgroWorld Pvt Ltd. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
