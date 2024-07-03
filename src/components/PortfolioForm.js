import React, { useState } from 'react';

const PortfolioForm = ({ addPortfolio }) => {
  const [investments, setInvestments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPortfolio({ investments: investments.split(', ') });
    setInvestments('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={investments} 
        onChange={(e) => setInvestments(e.target.value)} 
        placeholder="Enter investments separated by commas" 
      />
      <button type="submit">Add Portfolio</button>
    </form>
  );
};

export default PortfolioForm;
