import React from 'react';
import './Home.css';
import psScript from '../dominoImages/first-ps-script.png'
import dashboard from '../dominoImages/dashboard.png'


const Home = () => {
  return (
    <section className='home-container'>
      <div className='scroll-intro'>
        <p> Scroll down to see my journey </p>
      </div>
      
      <div className='story-container'>
        <div className='story-text'>Coding started with a need. Reducing repetitive tasks and improving efficiency.<br />
          Simply put: <strong>Making my life easier!</strong> <br />
          My job at the time required me to go through enormous amount of data to find patern in IT network logs. 
          This is when I was first introduce to it: <strong> PowerShell</strong>.
        </div>
        <div className='story-image'>
          <img src={psScript} alt='my first powershell script.'></img> 
        </div>
      </div>

      <div className='story-container'>
        <div className='story-image'>
          <img src={dashboard} alt='in-house app dashboard'></img>
        </div>
        <div className='story-text'>
          Learning about powershell opened my horizon and from it emerge a new opportunity: <br />
          <strong>building an app that would help further streamline my workflow.</strong> <br />
          After a longer-than-needed brainstorming on the app name, I started building it from the ground up.
          React would serve the front end and to favourise integration with other tools, Python would serve teh back end. 
        </div>
      </div>
     
      
      
    </section>
  );
};

export default Home;
