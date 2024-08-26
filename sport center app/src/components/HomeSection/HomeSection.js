import React from 'react';
import HomeText from './HomeText';
import HomeButtons from './HomeButtons';

const HomeSection = () => {
  return (
    <header id="home" className="vh-100 d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/hero-man.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
      <div>
        <HomeText />
        <HomeButtons />
      </div>
    </header>
  );
};

export default HomeSection;
