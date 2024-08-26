import React from 'react';
import StatItem from './StatItem';

const StatisticsSection = () => {
  return (
    <section id="statistics" className="py-5">
      <div className="container text-center">
        <div className="row">
          <StatItem number="325" title="Course" />
          <StatItem number="405" title="Work Out" />
          <StatItem number="305" title="Working Hour" />
          <StatItem number="705" title="Happy Client" />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
