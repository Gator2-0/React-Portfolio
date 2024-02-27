import React from 'react';
// import { Container, Row, Col} from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
// import { Textfit } from 'react-textfit';

import { Toggle } from './toggle';
import useLocalStorage from 'use-local-storage';

function Header () {  
  // window.matchmedia let us matche the page them to the user preferred theme set on his windows.
  const userPreference = window.matchMedia("(prefers-color-scheme: light)").matches;
  console.log(userPreference);
  //useLocalstorage- first value is the key and second is the default value fo the key.
  const [isLight, setIsLight] = useLocalStorage("isLight", userPreference);

  return (
    <section className='header-container'>
    <div className='header-text'>
      Something cool to say about learning to code bla bla bla
    </div>
    <div className='header-navbar'>
      <ul>
        <li>
          repositories
        </li>
        <li>
          Bio
        </li>
        <li>
          contact
        </li>
        <Toggle isChecked={isLight} handleChange={() => setIsLight(!isLight)}/>
      </ul>

    </div>

   </section>
   
  )
}

export default Header;

/*
<Navbar expand="lg" bg="black" data-bs-theme="dark" >
    <Container>
    <Toggle
            isChecked={isLight}
            handleChange={() => setIsLight(!isLight)}
          />
      <Navbar.Brand href='/'>Brand</Navbar.Brand>
      <Nav className="me-auto">
            <Nav.Link href="/Repositories">Repositories</Nav.Link>
            <Nav.Link href="/Bio">Bio</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
      </Nav>      
    </Container>

   </Navbar>
    
*/
