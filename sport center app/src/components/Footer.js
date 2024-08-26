import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-left">
            <img src="images/logo.png" alt="Powerful Gym Logo" style={{ maxWidth: '80px' }} />
            <p className="mt-2">Powerful Gym is dedicated to helping you achieve your fitness goals with top-notch equipment and expert trainers.</p>
          </div>
          <div className="col-md-4">
            <h5>Information</h5>
            <ul>
              <li><a href="#about" className="text-white">About Us</a></li>
              <li><a href="#classes" className="text-white">Classes</a></li>
              <li><a href="#blog" className="text-white">Blog</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Helpful Links</h5>
            <ul>
              <li><a href="#services" className="text-white">Services</a></li>
              <li><a href="#supports" className="text-white">Supports</a></li>
              <li><a href="#terms" className="text-white">Terms & Conditions</a></li>
              <li><a href="#privacy" className="text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
