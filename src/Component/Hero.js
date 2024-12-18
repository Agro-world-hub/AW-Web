import React from 'react';
import './Style/Hero.css';
import leftImage from '../images/HandPlant.png'; // Replace with your left-side image
import rightImage from '../images/GrowingPlant.jpg'; // Replace with your right-side image

const HeroSection = () => {
    return (
      <section className="hero-section">
        {/* Left Side with Background Image and Text */}
        <div className="hero-left">
          <img src={leftImage} alt="Background Design" className="hero-left-image" />
          <div className="hero-text">
            <h2>Empowering the Future of<br/> Agriculture in Sri Lanka</h2>
            <br/>
            <p>
              Transform and elevate the farmers, and agripreneurs of Sri Lanka across all levels to use and adapt 
              future-ready Agri-Fin-Tech platform to attain sustainable growth and maximise wealth for all stakeholders…
            </p>
          </div>
        </div>
  
        {/* Right Side with Image */}
        <div className="hero-right">
          <img src={rightImage} alt="Agriculture Growth" />
        </div>
      </section>
    );
  };
  
  export default HeroSection;
