import React from 'react';
import './Contact.css';

const ContactPage = () => {

  const languageImage = {
    JavaScript: '/logo-javascript.svg',
    HTML: '/logo-html.svg',
    CSS: '/logo-css.svg',
    Python: '/logo-python.svg',
    eact: '/logo-react.svg'
  }

  return (
    <div className='contact-main'>
      <div className='about-me'>
        <div className='language-list'>
        {Object.entries(languageImage).map(([language, src]) => (
        <img
          key={language}
          src={process.env.PUBLIC_URL + src}
          alt={`A ${language} logo`}
          className="language-logo"
        />
      ))}
        </div>

        
      <div>
          
        </div>
      </div>  
      <div className='contact-container'>
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
