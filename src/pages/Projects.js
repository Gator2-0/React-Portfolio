import React, { useState, useEffect } from 'react';
//import { Container, Row, Col, Card } from 'react-bootstrap';
//import { Link } from 'react-router-dom';

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
    <section className='cards-body'>
      <div id="cards">
      {repositories.map((repo, index) => {
          index++
          return (
            <div key={index} className="card">
              <div className="card-border"></div>
              <div className="card-content"></div>
            </div>
          )
      })
      }
      </div>

    </section>
    
    /* 
    <Container>
      <Row>
        <h1>Projects</h1>
      </Row>
      <Row className='cards'> 
        {repositories.map((repo, index) => {
          index++
          return (
            <Col key={index} >
              <Link className='link' to={repo.html_url} target="_blank" rel="noopener noreferrer">
                <Card className='customCard' >
                  <Card.Title>{repo.name}</Card.Title>
                  <Card.Subtitle>{repo.language}</Card.Subtitle>
                  <Card.Body style={{ maxHeight: '300px', overflowY: 'auto' }} className="custom-scrollbar">
                    {repo.description}
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          )
        })}
        </Row>
      
    </Container>
    */
  );
};

export default ProjectsPage;
