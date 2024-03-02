import React from 'react';
import './header.css';
import { Link, useLocation } from 'react-router-dom';


import { Toggle } from './toggle';
import useLocalStorage from 'use-local-storage';

function Header () {
  const location = useLocation();  
  // window.matchmedia let us matche the page them to the user preferred theme set on his windows.
  const userPreference = window.matchMedia("(prefers-color-scheme: light)").matches;
  console.log(userPreference);
  //useLocalstorage- first value is the key and second is the default value fo the key.
  const [isLight, setIsLight] = useLocalStorage("isLight", userPreference);

  return (
    <section className='header-container'>
      <div className='header-text'>
        {location.pathname === '/' ? (
          <div className='span-container'>
            <span className="slide-in-text">You don't become</span>
            <span className="slide-in-text">a developer by studying</span>
            <span className="slide-in-text">you become one</span>
            <span className="slide-in-text">by practicing! a lot!!</span>
          </div>
        ) : (
          <div className='home-container'>
            <Link to={'/'} className='home-logo'>
              <span >Home</span>
            </Link>
          </div>
        )}
      </div>
      <div className='header-navbar'>
        <ul>
          <li>
            <Link to='/Repositories'>Repositories</Link>
          </li>
          <li>
            <Link to='/Bio'>Bio</Link>
          </li>
          <li>
            <Link to='/Contact'>Contact</Link>
          </li>
          <Toggle isChecked={isLight} handleChange={() => setIsLight(!isLight)} />
        </ul>
      </div>
    </section>
  );
  
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
