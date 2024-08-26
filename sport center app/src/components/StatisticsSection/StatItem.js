import React from 'react';

const StatItem = ({ number, title }) => {
  return (
    <div className="col-md-3">
      <h3 className="stat-number">{number}</h3>
      <h4 className="stat-title">{title}</h4>
    </div>
  );
};

export default StatItem;
