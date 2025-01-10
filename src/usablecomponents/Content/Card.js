import React from 'react';
import './Card.css';

const Card = ({ title, value, description, bgColor, descColor }) => {
    return (
        
        <div className="card" style={{ backgroundColor: bgColor }}>
            <h3 className="card-title">{title}</h3>
            <span className="card-value">{value}</span>
            <p className="card-description" style={{ color: descColor }}>4 {description}</p>
        </div>
    );
};

export default Card;
