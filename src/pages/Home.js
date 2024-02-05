import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Row className='punch'>
        There will be some punchline here
      </Row>
      <Row>
        <Col>
          <Card className='projects'>
            {/* Content for projects card */}
            <Card.Text>
            Card to access all projects
            </Card.Text>
          </Card>
        </Col>
        <Col>         
          <Card className='bio'>
            {/* Content for bio card */}
            Card to access my Bio
          </Card>
        </Col>
        <Col>
          <Card className='contacts'>
            {/* Content for contacts card */}
            Card to access my Contacts
          </Card>         
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
