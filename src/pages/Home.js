import React from 'react';
//import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {handleMouseMove} from '../utils/mouseHandler'


const Home = () => {
  return (
    <section className='cards-body'>
      <div id='cards' onMouseMove={handleMouseMove}>
        <div className='card'>
          <div className="card-border"></div>
          <div className="card-content">    
          </div>
        </div>
      
        <div className='card'>
          <div className="card-border"></div>
          <div className="card-content">    
          </div>
        </div>
        <div className='card'>
          <div className="card-border"></div>
          <div className="card-content">    
          </div>
        </div>
      </div>
  </section>
  );
};

export default Home;
