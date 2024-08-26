import React from 'react';
import PurchaseCard from './PurchaseCard';

const PurchaseSection = () => {
  return (
    <section id="purchase" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5">Purchase From Us</h2>
        <div className="row">
          <div className="col-md-3">
            <PurchaseCard image="images/purchase1.jpg" title="Kettlebell 5kg" price="50" />
          </div>
          <div className="col-md-3">
            <PurchaseCard image="images/purchase2.jpg" title="Treadmill" price="500" />
          </div>
          <div className="col-md-3">
            <PurchaseCard image="images/purchase3.jpg" title="Adjustable Dumbbell" price="80" />
          </div>
          <div className="col-md-3">
            <PurchaseCard image="images/purchase4.jpg" title="Kettlebell 3kg" price="30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSection;
