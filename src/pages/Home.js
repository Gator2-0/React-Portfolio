import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Row className='punch'>
        There will be some punchline here
      </Row>
      <Row>
        <Col>
          <Link to="/Projects">
            <Card className='projects'>
              {/* Content for projects card */}
              Card to access all projects
            </Card>
          </Link>         
        </Col>
        <Col>   
          <Link to="/Bio">
            <Card className='bio'>
              {/* Content for bio card */}
              Card to access my Bio
            </Card>
          </Link>      
          
        </Col>
        <Col>
        <Link to="/Contact">
          <Card className='contacts'>
            {/* Content for contacts card */}
            Card to access my Contacts
          </Card> 
        </Link>
                  
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
