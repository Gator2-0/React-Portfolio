import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Textfit } from 'react-textfit';

function Header () {  
  return (
    <Container className='punch '>
      <Row >
        <Col sm={2} className="d-flex justify-content-center align-items-center">
          
          <Link to="/">
            <Button className='home-button' variant="outline-light" size="lg">Home</Button>{' '}
          </Link>
        </Col>
        <Col sm={10} >
          <Textfit min={50} >You don't become a developer by studying, you become one by practicing!!</Textfit>
        </Col>
      </Row>
    </Container>
    
  )
}

export default Header;

/*
Previous Header looked like that
<div>
      <header>
      <img class='avatar-image' src="./assets/Fred-the-fish.png" alt="Fred-the-fish"></img>
      <div class="portfolio-title">Jeremy Decherat</div>
      
      </header>

      <div class="details">
        <div class="about-me-container">
          <h1>About me</h1>
          <p class="small-description">
            I am a self taught programmer currently undertaking a full stack bootcamp. 
            I have worked on personal project over the past 1 year and I now wish to become a full time developper.
          </p>
          <a href="#current-project-card">Most current Project</a>
          <a href="#bottom">Bottom of the page</a>

        </div>

        <ul class="skills">
          <li id="a">HTML</li>
          <li id="b">CSS</li>
          <li id="c">JavaScript</li>
          <li id="d">C#</li>
          <li id="e">PowerShell</li>
          <li id="f">SQL</li>
        </ul>

        <div class="contact-details-container">
          <a class="contact-details" href="http://www.linkedin.com/in/jeremy-decherat-9214b315b" target="_blank">visit my LinkedIn</a><br></br>
          <a class="contact-details" href="https://github.com/Gator2-0" target="_blank">visit my Github</a><br></br>
          <span class="contact-details">Jeremy.decherat@gmail.com</span><br></br>
          <span class="contact-details">0451 642 300</span>
        </div>
  
      </div>
    </div>
*/
