import React, { useState } from 'react';
import ClassButton from './ClassButton';
import ClassItem from './ClassItem';

const ClassesSection = () => {
  const [activeClass, setActiveClass] = useState('yoga');

  const handleClassClick = (className) => {
    setActiveClass(className);
  };

  const classes = {
    yoga: {
      image: 'images/yoga.jpg',
      title: 'Yoga',
      description: 'Find peace and balance with our yoga classes.',
    },
    group: {
      image: 'images/group.webp',
      title: 'Group',
      description: 'Join our group classes for a fun and motivating workout experience.',
    },
    solo: {
      image: 'images/solo.jpg',
      title: 'Solo',
      description: 'Personalized training sessions tailored to your goals.',
    },
    stretching: {
      image: 'images/stret.webp',
      title: 'Stretching',
      description: 'Improve your flexibility and prevent injuries with our stretching classes.',
    },
  };

  return (
    <section id="classes" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Classes</h2>
        <div className="d-flex justify-content-center mb-4">
          <ClassButton onClick={handleClassClick} className="yoga" label="Yoga" />
          <ClassButton onClick={handleClassClick} className="group" label="Group" />
          <ClassButton onClick={handleClassClick} className="solo" label="Solo" />
          <ClassButton onClick={handleClassClick} className="stretching" label="Stretching" />
        </div>
        <div id="class-content">
          <ClassItem
            image={classes[activeClass].image}
            title={classes[activeClass].title}
            description={classes[activeClass].description}
          />
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
