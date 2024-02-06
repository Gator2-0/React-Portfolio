import React, { useState, useEffect } from 'react';

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
    <div>
      <h1>Projects</h1>
      <div>
        {repositories.map(repo => (
          <div key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            {/* Add more details or components as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
