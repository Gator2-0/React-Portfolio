import React from 'react';
//import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {handleMouseMove} from '../utils/mouseHandler'


const Home = () => {
  return (
    <section className='cards-body'>
      <div id='cards' onMouseMove={handleMouseMove}>
      <Link to={'Projects'} className='card-link'>
        <div className='card'>
       
          <div className="card-border"></div>
          
          <div className="card-content">    
          </div>
        
        </div>
      </Link>
      <Link to={'/Bio'}>
        <div className='card'>
          <div className="card-border"></div>
          <div className="card-content">    
          </div>
        </div>
      </Link>
      <Link to={'/Contact'}>
        <div className='card'>
          <div className="card-border"></div>
          <div className="card-content">    
          </div>
        </div>
      </Link>  
      </div>
  </section>
  );
};

export default Home;
