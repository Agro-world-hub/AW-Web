import React from "react";
import "./Style/Cards.css";
import commonImage from "../images/Leave.png"; // Replace with the correct image path

const cardData = [
  "Digitally disrupting the agribusiness sector will improve the lives of grass-root level stakeholders up to 65%",
  "Connect technology with agriculture shall empower transforming 12% of the current stakeholders and attract youth into agribusiness by 15%",
  "Quality assurance & traceability will pave way to tap new international markets",
  "Transparency in price will enable fair-trade and eliminate monopoly",
  "Generate up to 8% employment through market-driven value-chain",
  "Pave way to attract more female driven agribusinesses across the value-chain",
  "Transform Sri Lankan agri-community with improved financial literacy and better decision making with regard to crop profitability, pest & diseases",
  "Be an enabler to attract investments into the agribusinesses in Sri Lanka",
];

const Cards = () => {
  return (
    <div className="card-container-Eco">
      {cardData.map((text, index) => (
        <div key={index} className="card-Eco">
          <img src={commonImage} alt="Icon" className="card-icon-Eco" />
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
