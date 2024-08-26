import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5">Contact Us</h2>
        <ContactForm />
        <div className="map mt-5">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0192602165977!2d-122.42114858467948!3d37.77851997975757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b3a7e111f%3A0x1a0f0e6b8d3d3d4f!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1604079552063!5m2!1sen!2sus"
            width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen=""
            aria-hidden="false" tabindex="0"></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
