import React from 'react';

const ClassItem = ({ image, title, description }) => {
  return (
    <div className="class-item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ClassItem;
