import React from 'react';
import './portfolio.css';

const dummyPortfolio = [
  {
    id: 1,
    name: 'Tech Growth Fund',
    type: 'Mutual Fund',
    value: '$5,000',
  },
  {
    id: 2,
    name: 'High Yield Savings',
    type: 'Fixed Deposit',
    value: '$10,000',
  },
  {
    id: 3,
    name: 'Global Equity',
    type: 'Stocks',
    value: '$7,500',
  },
];

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1>Portfolio</h1>
      </div>
      <div className="portfolio-content">
        <div className="portfolio-start-investing">
        <img data-v-77c37184="" src="https://assets2.kuvera.in/production/atlantis/web/assets/img/no-investments.svg" class="b-portfolio-no-fund__no-fund-icon investment-image" />
          
          <h2>Start Investing!</h2>
          <div className="investment-options">
          {dummyPortfolio.map(item => (
              <div className="investment-option">
              <h3>{item.type}</h3>
              <p>Explore & invest in {item.name}</p>
            </div>
            ))}
            
            <div className="investment-option">
              <h3>Fixed Deposit</h3>
              <p>Explore, compare and invest in best online FDs</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Portfolio;
