import React from "react";
import "./Style/MarketPlaceBody.css";
import marketImage from "../images/MPLady.png"; // Image path for laptop illustration
import tabletImage from "../images/MPTab.png"; // Image path for tablet illustration
import icon1 from "../images/Wholesale.png"; // Icon for wholesale
import icon2 from "../images/Bundles.png"; // Icon for bundles
import icon3 from "../images/Delivery.png"; // Icon for delivery
import icon4 from "../images/RepeatOrders.png"; // Icon for repeat orders
import { useNavigate } from "react-router-dom";

const MarketPlaceBody = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup"); // Navigates to Sign Up page
  };

  return (
    <div>
      {/* Section 1: Intro Section */}
      <div className="marketplace-intro">
        <div className="intro-left">
          <h1 className="marketplace-title">Market Place</h1>
          <h2 className="marketplace-subtitle">
            Your Online Marketplace for Quality Produce
          </h2>
          <p className="marketplace-description">
            The Marketplace is a versatile online platform offering both wholesale and retail options for fresh vegetables, fruits, mushrooms, grains, and more. Customers can choose from pre-packaged bundles or select custom items to suit their needs. Whether buying for personal use or business, the platform offers flexible pickup or scheduled delivery options, allowing repeat orders over a set duration for added convenience. It’s the perfect place to access quality produce, tailored to any scale of demand.
          </p>
          <button className="sign-up-button" onClick={handleSignUp}>
            Sign up Today!
          </button>
        </div>
        <div className="intro-right">
          <img src={marketImage} alt="Market Place Laptop" className="market-image" />
        </div>
      </div>

      {/* Section 2: Benefits Section */}
      <div className="marketplace-benefits">
        <div className="benefits-left">
          <img src={tabletImage} alt="Tablet View" className="tablet-image" />
        </div>
        <div className="benefits-right">
          <h2 className="benefits-title">Benefits to Buyers</h2>
          <div className="benefits-cards">
            {/* Card 1 */}
            <div className="benefit-card">
              <img src={icon1} alt="Wholesale Options" className="benefit-icon" />
              <div className="benefit-content">
                <h3>Wholesale and retail options available</h3>
                <p>
                  The platform offers both wholesale and retail choices for fresh produce, including vegetables, fruits, mushrooms, and grains.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="benefit-card">
              <img src={icon2} alt="Custom Bundles" className="benefit-icon" />
              <div className="benefit-content">
                <h3>Pre-packaged bundles or custom selections</h3>
                <p>
                  Customers can choose from convenient pre-packaged bundles or customize their order to meet specific needs.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="benefit-card">
              <img src={icon3} alt="Flexible Delivery" className="benefit-icon" />
              <div className="benefit-content">
                <h3>Flexible pickup or scheduled delivery</h3>
                <p>
                  Options for flexible pickup or scheduled delivery ensure convenience for both personal and business customers.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="benefit-card">
              <img src={icon4} alt="Repeat Orders" className="benefit-icon" />
              <div className="benefit-content">
                <h3>Repeat orders for added convenience</h3>
                <p>
                  Customers can set up repeat orders, ensuring a consistent supply of fresh produce over a set duration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlaceBody;
