import React from 'react';
import './Card.css';

const Card = ({ borderTopColor, icon, title, text, className }) => {
  return (
    <div className={`card ${className}`} style={{ borderTopColor }}>
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
      <div className="icon-container">
        <img src={icon} alt="title" />
      </div>
    </div>
  );
};

export default Card;
