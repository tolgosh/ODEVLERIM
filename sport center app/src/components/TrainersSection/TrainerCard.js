import React from 'react';

const TrainerCard = ({ image, name, role }) => {
  return (
    <div className="trainer-card">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <p>{role}</p>
    </div>
  );
};

export default TrainerCard;
