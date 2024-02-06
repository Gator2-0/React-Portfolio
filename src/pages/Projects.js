import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Textfit } from 'react-textfit';

const ProjectsPage = () => {
  const [repositories, setRepositories] = useState([]);
  
  useEffect(() => {
    const fetchRepositories = async () => {
      const apiUrl = 'https://api.github.com/users/Gator2-0/repos';

      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`Failed to fetch repositories: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data); // for checking the data structure
        setRepositories(data);
      } catch (error) {
        console.error('Error fetching repositories:', error.message);
      }
    };

    fetchRepositories();
  }, []); 

  return (
    <Container>
      <Row>
        <h1>Projects</h1>
      </Row>
      <Row>
        {repositories.map(repo => (
          <Col key={repo.id}>
            <Card className='customCard' >
              <Card.Title><Textfit>{repo.name}</Textfit></Card.Title>
              <Card.Text><Textfit>{repo.description}</Textfit></Card.Text>
              {/* Add more details or components as needed */}
            </Card>
          </Col>
        ))}
        </Row>
      
    </Container>
  );
};

export default ProjectsPage;
