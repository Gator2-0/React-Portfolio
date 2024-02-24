import React from 'react';
//import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {handleMouseMove} from '../utils/mouseHandler'


const Home = () => {
  return (
    <section className='cards-body'>
      <div id='cards' onMouseMove={handleMouseMove}>
      <Link to="/Projects">
        <div className='card'>
          
            <div className='card-content'>
              Have a look at my projects
            </div>
        </div>
        </Link>
        <div className='card'>
          <Link to="/Bio">
            <div className='customCard'>
              {/* Content for bio card */}
              Who am I?
            </div>
          </Link>
        </div>
        <div className='card'>
          <Link to="/Contact">
            <div className='customCard'>
              {/* Content for contacts card */}
              If you want to contact me
            </div>
          </Link>
        </div>
      </div>
  </section>
  );
};

export default Home;
