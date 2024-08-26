import React, { useState } from 'react';
import BMIForm from './BMIForm';
import BMIResult from './BMIResult';

const BMICalculator = () => {
  const [bmi, setBmi] = useState(null);

  const handleBMICalculate = (event) => {
    event.preventDefault();

    const heightInput = document.getElementById('height').value;
    const weightInput = document.getElementById('weight').value;

    if (!heightInput || !weightInput || isNaN(heightInput) || isNaN(weightInput)) {
      alert("Lütfen geçerli bir boy ve kilo giriniz.");
      return;
    }

    const height = parseFloat(heightInput) / 100;
    const weight = parseFloat(weightInput);

    if (height <= 0 || weight <= 0) {
      alert("Lütfen sıfırdan büyük geçerli bir boy ve kilo giriniz.");
      return;
    }

    const calculatedBmi = (weight / (height * height)).toFixed(2);
    setBmi(calculatedBmi);
  };

  return (
    <section id="bmi" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5">BMI Calculator</h2>
        <BMIForm onSubmit={handleBMICalculate} />
        {bmi && <BMIResult bmi={bmi} />}
      </div>
    </section>
  );
};

export default BMICalculator;
