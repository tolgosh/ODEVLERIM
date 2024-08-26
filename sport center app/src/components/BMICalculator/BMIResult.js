import React from 'react';

const BMIResult = ({ bmi }) => {
  return (
    <div className="text-center mt-4">
      <h3>Your BMI: <span id="bmi-value">{bmi}</span></h3>
      <img src="images/bmi-index.jpg" alt="BMI Index" />
    </div>
  );
};

export default BMIResult;
