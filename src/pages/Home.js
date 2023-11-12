import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Row className='punch'>
        There will be some punchline here
      </Row>
      <Row>
        <Col xs={12} md={8}>
          <Card className='projects'>
            {/* Content for projects card */}
            Card to access all projects
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Row className='bio'>
            <Card>
              {/* Content for bio card */}
              Card to access my Bio
            </Card>
          </Row>
          <Row className='contacts'>
            <Card>
              {/* Content for contacts card */}
              Card to access my Contacts
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
