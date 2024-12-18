import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer';
import ContactForm from '../Component/ContactForm';
import "../Component/Style/ContactUs.css";

import emailIcon from "../images/APP_PC.png"; // Email icon path
import phoneIcon from "../images/APP_PC.png"; // Phone icon path
import locationIcon from "../images/APP_PC.png"; // Location icon path
import profileIcon1 from "../images/APP_PC.png"; // Profile icon 1
import profileIcon2 from "../images/APP_PC.png"; // Profile icon 2

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Left Section */}
      <div className="Con-left">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-description">
          Email, Call or Complete the form to learn how Agro World can help you.
        </p>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <img src={emailIcon} alt="Email" className="contact-icon" />
            <p>info@agroworld.lk</p>
          </div>
          <div className="info-item">
            <img src={phoneIcon} alt="Phone" className="contact-icon" />
            <p>+94 770111999</p>
          </div>
          <div className="info-item">
            <img src={locationIcon} alt="Location" className="contact-icon" />
            <p>No. 14, Sir Baron Jayathilake Mawatha, Colombo 01, LK</p>
          </div>
        </div>

        {/* Support and Feedback */}
        <div className="support-section">
          <div className="support-item">
            <img src={profileIcon1} alt="Support" className="profile-icon" />
            <div>
              <h3>Customer Support</h3>
              <p>
                Our support team is available around the clock to address any
                concerns or queries you may have.
              </p>
            </div>
          </div>
          <div className="support-item">
            <img src={profileIcon2} alt="Feedback" className="profile-icon" />
            <div>
              <h3>Feedback and Suggestions</h3>
              <p>
                We value your feedback and are continuously working to improve
                Agro World. Your input is crucial in shaping the ratings of Agro
                World.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="Con-right">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;