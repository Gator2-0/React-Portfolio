import React from 'react';
import './Home.css';
import psScript from '../dominoImages/first-ps-script.png'


const Home = () => {
  return (
    <section className='home-container'>
      <p className='welcome-p'>Scroll down to discover my coding journey</p>
      <div className='intro'>
        <div>
          <h2>Coding started with a need. 
            Reducing repetitive tasks and improving efficiency.
          </h2>
          <h2> 
            Simply put: <strong>Making my life easier!</strong> 
          </h2>
          <p>
            My job at the time required me to go through enormous amount of data to find patern in IT network logs.
            this is when I was first introduce to it: Powershell
          </p>
        </div>
        <img
        src={psScript}
        alt='First Powershell script'/>
        
      </div>
      
      
      
  </section>
  );
};

export default Home;
