import React from "react";
import "./Style/PlantCareBody.css";
import farmerImage from "../images/FarmerP.png"; // Replace with actual image path
import appImage from "../images/APP_PC.png"; // Single app screen image
import cropIcon from "../images/Access.png";
import weatherIcon from "../images/Weather.png";
import supportIcon from "../images/Finance.png";
import marketplaceIcon from "../images/MarAccess.png";

const PlantCareBody = () => {
  return (
    <div>
      {/* Section 1: Intro Section */}
      <div className="plantcare-intro">
        {/* Left Side Content */}
        <div className="intro-left">
          <h1 className="plantcare-title">Plant Care Mobile App</h1>
          <h2 className="plantcare-subtitle">
            Empowering Farmers & Supporting Using Smart Technology
          </h2>
          <p className="plantcare-description">
            Plant Care is a powerful mobile app designed to simplify and enhance
            farm management. It provides affordable financing, shared risk
            options, and guidance on crop selection based on agro-ecological
            data. Farmers benefit from a smart crop calendar, disease prediction
            through advanced tech, and consistent expert advice. The app
            connects farmers with agri-input providers, automates farm
            accounting, and includes weather forecasts, asset management, and
            customer support.
          </p>
        </div>

        {/* Right Side Single Image */}
        <div className="intro-right">
          <img src={appImage} alt="App Screen" className="app-image" />
        </div>
      </div>

      {/* Section 2: Benefits Section */}
      <div className="plantcare-benefits">
        {/* Left Side Farmer Image */}
        <div className="benefits-left">
          <img
            src={farmerImage}
            alt="Farmer Illustration"
            className="farmer-image"
          />
        </div>

        {/* Right Side Benefit Cards */}
        <div className="benefits-right">
          <h2 className="benefits-title">Why Plant Care</h2>
          <div className="benefits-cards">
            {/* Card 1 */}
            <div className="benefit-card">
              <img src={cropIcon} alt="Crop Calendars" className="benefit-icon" />
              <div className="benefit-content">
                <h3>Access Crop Calendars</h3>
                <p>
                  Crop calendars incorporate scientific methods and best
                  practices to guide farmers through cultivation, ensuring
                  optimal growth and yield for every crop.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="benefit-card">
              <img src={weatherIcon} alt="Weather Forecast" className="benefit-icon" />
              <div className="benefit-content">
                <h3>Get Weather Forecast</h3>
                <p>
                  Our weather forecasts provide accurate, timely data to help
                  farmers make informed, weather-aware decisions.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="benefit-card">
              <img src={supportIcon} alt="Financial Support" className="benefit-icon" />
              <div className="benefit-content">
                <h3>Financial Support</h3>
                <p>
                  Farmers get access to financial support through the app to
                  fund their cultivation needs.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="benefit-card">
              <img
                src={marketplaceIcon}
                alt="Marketplace Access"
                className="benefit-icon"
              />
              <div className="benefit-content">
                <h3>Marketplace Access</h3>
                <p>
                  Farmers can sell their harvest through AgroWorld, accessing
                  collection centers easily with the Plant Care QR code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCareBody;
