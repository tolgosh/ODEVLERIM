import React from 'react';

const ContactForm = () => {
  return (
    <form>
      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label htmlFor="name">Your Name</label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="email">Your Email</label>
          <input type="email" className="form-control" id="email" placeholder="Your Email" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">Your Message</label>
        <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
      </div>
      <button type="submit" className="btn btn-primary btn-block">Send Message</button>
    </form>
  );
};

export default ContactForm;
