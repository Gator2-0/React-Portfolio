import React from 'react';
import './Contact.css';

const ContactPage = () => {
  return (
    <div className='main'>
      <div className='centre'>
        <a className='contact-details' 
        href='https://codepen.io/gator2-0' 
        target="_blank"
        rel="noopener noreferrer">
          <h1>codepen account 🖊️</h1>
        </a>
        <a className='contact-details' 
        href='https://github.com/Gator2-0' 
        target="_blank"
        rel="noopener noreferrer">
          <h1>Github account</h1>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
