import React from 'react';

const ReviewCard = ({ image, name, review }) => {
  return (
    <div className="review-card">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <p>{review}</p>
    </div>
  );
};

export default ReviewCard;
