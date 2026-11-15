import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-section">
      <h2 className="contact-title">Let's Build Something Together</h2>
      <p className="contact-text">
        Whether you're a recruiter hunting for an AI specialist, a startup looking for someone to bring your vision to life, 
        or just a fellow dev who wants to jam on ideas—I'm always down to chat.
      </p>
      
      <a href="mailto:kevindoshi17@gmail.com" className="contact-btn">
        <Mail size={20} />
        <span>Drop Me a Line</span>
      </a>

      <div className="contact-email-text">
        <p>Or reach me directly at <a href="mailto:kevindoshi17@gmail.com" className="email-inline">kevindoshi17@gmail.com</a></p>
      </div>
    </div>
  );
};

export default Contact;
