import React from 'react';
import './SecondCard.css';

const CardComponent = ({ title, count, maleCount, femaleCount, percentageChange }) => {
  return (
    <div className="card2">
      <div className='data'>
        <div className='data-title'>{title}</div>
        <div className='data-number'>{count}</div>
        <div className='data-gender'>
          <div className='male'>{maleCount} Men</div>
          <div>{femaleCount} Women</div>
        </div>
      </div>
      <div className="percentage-change">
        <div className="num" style={{ color: 'red' }}>+{percentageChange}%</div>
        <div className='arrow'><svg width="8" height="9" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 2.5L2.5 0.5M2.5 0.5L4.5 2.5M2.5 0.5V7.5" stroke="#FF5151" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </div>
        <img className="curve" src='./menu_items/bar.svg' />
        <div className='past'>+{percentageChange}% Past month</div>
      </div>
    </div>
  );
};

export default CardComponent;
