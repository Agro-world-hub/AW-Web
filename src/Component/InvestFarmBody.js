import React from "react";
import "./Style/InvestFarmBody.css";
import investmentImage from "../images/BlueCart.png"; // Replace with your image path
import { useNavigate } from "react-router-dom";
import investorImage from "../images/investor.png";
import icon1 from "../images/Money.png"; // Icons used for benefits
import icon2 from "../images/Farms.png";
import icon3 from "../images/Chart.png";
import icon4 from "../images/Chart Line.png";

const InvestFarmBody = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup"); // Directs to the Sign Up page
  };

  return (
    <div>
        <div className="Row-One">
        {/* Left Section */}
        <div className="left">
            <h1 className="investment-title">InvestmentFarm Web</h1>
            <h2 className="investment-subtitle">
            Maximizing Returns: Smart Investments in Sustainable Agriculture
            </h2>
            <p className="investment-description">
            InvestorFarm is a user-friendly web app designed to help investors buy
            stocks in Agro World and track their progress. The platform provides
            real-time updates on investment performance, enabling investors to
            monitor growth, and make informed decisions. With a focus on
            transparency and smart management, InvestorFarm ensures investors can
            easily manage their agricultural portfolios and expect strong returns
            from their investments in the farming sector.
            </p>
            <button className="sign-up-button" onClick={handleSignUp}>
            Sign up Today!
            </button>
        </div>

        {/* Right Section */}
        <div className="right">
            <img
            src={investmentImage}
            alt="Investment Growth"
            className="investment-image"
            />
        </div>
        </div>
      {/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
      <div className='Raw-Two'>
            {/* Left Section - Image */}
      <div className="two-left">
        <img src={investorImage} alt="Investor" className="investor-image" />
      </div>

      {/* Right Section - Benefits Cards */}
      <div className="two-right">
        <h2 className="benefits-title">Benefits to Investors</h2>
        <div className="benefits-cards">
          {/* Card 1 */}
          <div className="benefit-card">
            <img src={icon1} alt="Investment" className="benefit-icon" />
            <div className="benefit-content">
              <h3>Direct investment in agriculture opportunities</h3>
              <p>
                This platform allows both small and large investors to directly
                invest in agricultural ventures, providing an accessible way to
                participate in the agricultural sector.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="benefit-card">
            <img src={icon2} alt="Validated Farms" className="benefit-icon" />
            <div className="benefit-content">
              <h3>Access to validated farms and farmers</h3>
              <p>
                Investors gain access to a curated list of verified farms and
                reliable farmers, ensuring that their investments are made in
                legitimate and trustworthy agricultural operations.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="benefit-card">
            <img src={icon3} alt="Monitoring" className="benefit-icon" />
            <div className="benefit-content">
              <h3>Continuous farm monitoring and updates</h3>
              <p>
                The system ensures ongoing monitoring of farm activities and
                provides real-time updates, keeping investors informed about the
                progress of their investments.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="benefit-card">
            <img src={icon4} alt="Predictive Returns" className="benefit-icon" />
            <div className="benefit-content">
              <h3>Predictive investment value and returns</h3>
              <p>
                Based on the crop life cycle, the system predicts the potential
                value of investments, allowing investors to make informed
                decisions and get appropriate returns.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
      <div className='Raw-Three'>
        <div></div>
      </div>
    </div>
  );
};

export default InvestFarmBody;