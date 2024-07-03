import React, { useState } from 'react';

const PortfolioItem = ({ portfolio, updatePortfolio, deletePortfolio }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [investments, setInvestments] = useState(portfolio.investments.join(', '));

  const handleUpdate = () => {
    updatePortfolio(portfolio._id, { investments: investments.split(', ') });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={investments} 
            onChange={(e) => setInvestments(e.target.value)} 
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>{portfolio.investments.join(', ')}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deletePortfolio(portfolio._id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
