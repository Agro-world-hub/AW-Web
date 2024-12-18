import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Style/Body.css';
import CardComponent from "./CardComponent";
import CardData from './Model/CardData';
import HandPlant from '../images/HandPlant.png';
import Growing from '../images/GrowingPlant.jpg';
import Eco from '../images/EcoSystem.png';
import About from '../images/About Glob.png';
import Solution from '../images/Solution Components.png';
import Cards from './Cards';
import Center from '../images/Center.png';
import Oppo from '../images/Oppo Back.png';
import Opportunities from './Opportunities';
import paddy from '../images/paddy.png';
import LeadershipTeam from './LeadershipTeam';
import Footer from './Footer';
import HeroSection from './Hero';

const Body = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleContactClick = () => {
    navigate('/contact'); // Navigate to the Contact page
  };

  return (
    <div className='MainBody'>
      <div className='GreenStart'>
        <HeroSection />
      </div>
      <div className='About'>
        <div className='About-left'>
          <img src={About} alt='about' />
        </div>
        <div className='About-right'>
          <div className='about-content'>
            <h4 className='topic'>About Us</h4>
            <h2>Changing the landscape of agriculture</h2>
            <p>
              Agro World is a Sri Lankan Agri-FinTech Startup Company<br />
              helping farmers and investors to maximize their wealth by<br />
              optimizing the agriculture value chain by creating an<br />
              investment-to-shelf digital platform
            </p>
          </div>
        </div>
      </div>
      <div className='EcoSystem'>
        <h4 className='topic'>AgroWorld Eco System</h4>
        <img src={Eco} alt='eco-img' />
      </div>
      <div className="SolutionComponents">
        <div className="header-section">
          <h4 className="topic">Solution Components</h4>
          <h2>Agro World serves the interest of all agri stakeholders</h2>
        </div>
        <div className="card-section" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", padding: "20px", gap: "20px" }}>
          {CardData.map((card, index) => (
            <CardComponent
              key={index}
              image={card.image}
              topic={card.topic}
              texts={card.texts}
              arrowLink={card.arrowLink}
            />
          ))}
        </div>
        <div className="solution-image">
          <img src={Solution} alt="Solution" />
        </div>
      </div>
      <div className='target-section'>
        <h4 className="topic">Our Target</h4>
        <h2>Impact Created to the Ecosystem</h2>
        <Cards />
      </div>
      <div className='Stakeholder'>
        <h4 className="topic">Stakeholder Benefits</h4>
        <div className="column-container">
          <div className="column column-left">
            <div className="text-item">🌿 Share holding opportunity to ADC</div>
            <div className="text-item">🌿 Stable farm-gate price</div>
            <div className="text-item">🌿 Planned cultivation</div>
            <div className="text-item">🌿 Crop insurance free of charge</div>
            <div className="text-item">🌿 Farmer pension scheme for a future</div>
          </div>
          <div className="column column-middle">
            <img src={Center} alt="Illustration" className="center-image" />
          </div>
          <div className="column column-right">
            <div className="text-item">🌿 Transport and logistics facility</div>
            <div className="text-item">🌿 Edu-programmes for quality & productivity</div>
            <div className="text-item">🌿 Impacts of post-harvest loss reduction</div>
            <div className="text-item">🌿 Agri modernisation and tech-adaptation</div>
            <div className="text-item">🌿 Centralized e-platform to supply-chain-management</div>
          </div>
        </div>
      </div>
      <div className='oppotunity'>
        <div className='Oppo-Cart'>
          <h4 className="topic">Opportunities</h4>
          <div className="Oppo-Background" style={{ backgroundImage: `url(${Oppo})` }}>
            <Opportunities />
          </div>
        </div>
        <div className='paddy'>
          <img src={paddy} alt="Agricultural Background" />
          <div className='paddy-overlay'>
            <h1>Get involved in Agricultural Uprising</h1>
            <button className='paddy-button' onClick={handleContactClick}>
              Contact
            </button>
          </div>
        </div>
      </div>
      <div className='Lead'>
        <LeadershipTeam />
      </div>
      <div className='foot'>
        <Footer />
      </div>
    </div>
  );
};

export default Body;
