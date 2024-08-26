import React from 'react';
import TrainerCard from './TrainerCard';

const TrainersSection = () => {
  return (
    <section id="trainers" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Best Trainers</h2>
        <div className="row">
          <div className="col-md-4">
            <TrainerCard image="images/trainer1.jpg" name="John Doe" role="Fitness Trainer" />
          </div>
          <div className="col-md-4">
            <TrainerCard image="images/trainer2.jpg" name="Jane Smith" role="Yoga Instructor" />
          </div>
          <div className="col-md-4">
            <TrainerCard image="images/trainer3.jpg" name="Mike Johnson" role="Cardio Expert" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
