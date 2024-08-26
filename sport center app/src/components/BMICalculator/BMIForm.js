import React from 'react';

const BMIForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-row justify-content-center">
        <div className="col-md-3 mb-3">
          <label htmlFor="height">Your Height (cm)</label>
          <input type="number" id="height" className="form-control" placeholder="Your Height (cm)" />
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="weight">Your Weight (kg)</label>
          <input type="number" id="weight" className="form-control" placeholder="Your Weight (kg)" />
        </div>
        <div className="col-md-3 mb-3">
          <button type="submit" className="btn btn-primary btn-block">Calculate BMI</button>
        </div>
      </div>
    </form>
  );
};

export default BMIForm;
