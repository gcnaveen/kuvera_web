import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PortfolioItem from './PortfolioItem';
import PortfolioForm from './PortfolioForm';

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    axios.get('http://your-backend-url/api/portfolio/userId')
      .then(response => {
        setPortfolios(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the portfolios!", error);
      });
  }, []);

  const addPortfolio = (portfolio) => {
    axios.post('http://your-backend-url/api/portfolio', portfolio)
      .then(response => {
        setPortfolios([...portfolios, response.data]);
      })
      .catch(error => {
        console.error("There was an error adding the portfolio!", error);
      });
  };

  const updatePortfolio = (id, updatedPortfolio) => {
    axios.put(`http://your-backend-url/api/portfolio/${id}`, updatedPortfolio)
      .then(response => {
        setPortfolios(portfolios.map(portfolio => (portfolio._id === id ? response.data : portfolio)));
      })
      .catch(error => {
        console.error("There was an error updating the portfolio!", error);
      });
  };

  const deletePortfolio = (id) => {
    axios.delete(`http://your-backend-url/api/portfolio/${id}`)
      .then(() => {
        setPortfolios(portfolios.filter(portfolio => portfolio._id !== id));
      })
      .catch(error => {
        console.error("There was an error deleting the portfolio!", error);
      });
  };

  return (
    <div>
      <h1>Portfolio</h1>
      <PortfolioForm addPortfolio={addPortfolio} />
      {portfolios.map(portfolio => (
        <PortfolioItem 
          key={portfolio._id} 
          portfolio={portfolio} 
          updatePortfolio={updatePortfolio} 
          deletePortfolio={deletePortfolio} 
        />
      ))}
    </div>
  );
};

export default Portfolio;
