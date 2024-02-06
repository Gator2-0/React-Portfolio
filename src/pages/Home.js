import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Row className='punch'>
      You don't become a developer by studying, you become one by practicing!!
      </Row>
      <Row>
        <Col>
          <Link className='link' to="/Projects">
            <Card body className='customCard'>
              {/* Content for projects card */}
              Have a look at my projects
            </Card>
          </Link>         
        </Col>
        <Col>   
          <Link className='link' to="/Bio">
            <Card body className='customCard'>
              {/* Content for bio card */}
              Who am I?
            </Card>
          </Link>      
          
        </Col>
        <Col>
        <Link className='link' to="/Contact">
          <Card body className='customCard'>
            {/* Content for contacts card */}
            If you want to contact me
          </Card> 
        </Link>
                  
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
