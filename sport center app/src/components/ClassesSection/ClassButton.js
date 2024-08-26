import React from 'react';

const ClassButton = ({ onClick, className, label }) => {
  return (
    <button className="btn btn-outline-primary mx-2" onClick={() => onClick(className)}>
      {label}
    </button>
  );
};

export default ClassButton;
