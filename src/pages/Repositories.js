import React, { useState, useEffect } from 'react';
//import { Container, Row, Col, Card } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import {handleMouseMove} from '../utils/mouseHandler'

const RepositoriesPage = () => {
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

  const languageimage = {
    JavaScript: '/logo-javascript.svg',
    HTML: '/logo-html.svg',
    CSS: '/logo-css.svg'
  }

  return (
    <section className='cards-body'>
      <div id="cards" onMouseMove={handleMouseMove}>
      {repositories.map((repo, index) => {
          index++
          return (
            <div key={index} className="card">
              <div className="card-border"></div>
              <div className="card-content">
                <div className="card-image">
                <img 
                  src={process.env.PUBLIC_URL + languageimage[repo.language]} 
                  alt= {`A ${repo.language} logo`}/>
                </div>
                <div className="card-info-wrapper">
                  <div className="card-info">
                    <div className="card-info-title">
                      <h3>{repo.name}</h3>  
                      <h4>{repo.description}</h4>
                    </div>    
                  </div>
                </div>
              </div>
            </div>
          )
      })
      }
      </div>

    </section>
    
  );
};

export default RepositoriesPage;
