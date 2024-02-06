import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

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
          <Col>
            <Card className='customCard' key={repo.id}>
              <Card.Title>{repo.name}</Card.Title>
              <p>{repo.description}</p>
              {/* Add more details or components as needed */}
            </Card>
          </Col>
        ))}
        </Row>
      
    </Container>
  );
};

export default ProjectsPage;
