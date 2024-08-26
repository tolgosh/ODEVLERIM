import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewSection = () => {
  return (
    <section id="review" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Review Client</h2>
        <div className="row">
          <div className="col-md-6">
            <ReviewCard image="images/client1.jpg" name="Anna Lee" review="Great trainers and a wonderful environment!" />
          </div>
          <div className="col-md-6">
            <ReviewCard image="images/client2.jpg" name="Mark Smith" review="The facilities are top-notch and the staff is very friendly." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
