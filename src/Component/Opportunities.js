import React from 'react';
import './Style/Opportunities.css';
import image1 from '../images/Stabble.jpg'; // Replace with unique image paths
import image2 from '../images/Planned.jpg';
import image3 from '../images/Farmer.jpg';
import image4 from '../images/Free.jpg';
import icon1 from '../images/tag.png'; // Replace with small icon paths
import icon2 from '../images/vas.png';
import icon3 from '../images/heart.png';
import icon4 from '../images/done.png';

const Opportunities = () => {
  return (
    <div className="Oppo-container">
      {/* Card 1 */}
      <div className="Oppo-card">
        <div className="Oppo-image">
          <img src={image1} alt="Stable Great Price" />
          <div className="Oppo-icon">
            <img src={icon1} alt="Icon" />
          </div>
        </div>
        <div className="Oppo-content">
          <h3>Stable Great Price</h3>
          <ul>
            <li>Increases Farmer Income</li>
            <li>Increases Retailer Net Profit</li>
          </ul>
        </div>
      </div>

      {/* Card 2 */}
      <div className="Oppo-card">
        <div className="Oppo-image">
          <img src={image2} alt="Planned Cultivation" />
          <div className="Oppo-icon">
            <img src={icon2} alt="Icon" />
          </div>
        </div>
        <div className="Oppo-content">
          <h3>Planned Cultivation</h3>
          <ul>
            <li>Demand & supply management</li>
            <li>Agro ecological based crop recommendation</li>
          </ul>
        </div>
      </div>

      {/* Card 3 */}
      <div className="Oppo-card">
        <div className="Oppo-image">
          <img src={image3} alt="Farmer Pension Scheme" />
          <div className="Oppo-icon">
            <img src={icon3} alt="Icon" />
          </div>
        </div>
        <div className="Oppo-content">
          <h3>Farmer Pension Scheme</h3>
          <ul>
            <li>Monthly Pension</li>
            <li>Age: 18-59 years old</li>
          </ul>
        </div>
      </div>

      {/* Card 4 */}
      <div className="Oppo-card">
        <div className="Oppo-image">
          <img src={image4} alt="Free Crop Insurance" />
          <div className="Oppo-icon">
            <img src={icon4} alt="Icon" />
          </div>
        </div>
        <div className="Oppo-content">
          <h3>Free Crop Insurance</h3>
          <ul>
            <li>Covers Crop Losses</li>
            <li>Reasonable Cover Situations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
