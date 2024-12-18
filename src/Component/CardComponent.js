import React from "react";
import "./Style/CardComponent.css";
import Arrow from '../images/Arrow.png';

const CardComponent = ({ image, topic, texts, arrowLink }) => {
  return (
    <div className="card-container">
      <img src={image} alt="Card Image" className="card-image" />
      <h3 className="card-topic">{topic}</h3>
      <ul className="card-texts">
        {texts.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
      <div className="card-arrow">
        <a href={arrowLink} target="_blank" rel="noopener noreferrer">
          <img
            src={Arrow} // Replace with your arrow mark image path
            alt="Arrow Mark"
          />
        </a>
      </div>
    </div>
  );
};

export default CardComponent;
