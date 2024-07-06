import React, { useState, useEffect } from 'react';
import './header.css';
import { Link, useLocation } from 'react-router-dom';
import DominoSlide from 'gator-front';

import { Toggle } from './toggle';
import useLocalStorage from 'use-local-storage';

function Header () {
  const location = useLocation();  
  // window.matchmedia let us matche the page them to the user preferred theme set on his windows.
  const userPreference = window.matchMedia("(prefers-color-scheme: light)").matches;
  console.log(userPreference);
  //useLocalstorage- first value is the key and second is the default value fo the key.
  const [isLight, setIsLight] = useLocalStorage("isLight", userPreference);
  const [showText, setShowText] = useState(window.innerWidth >= 970);

  const handleResize = () =>{
    if(window.innerWidth <970){
      setShowText(false)
    }
    else{
      setShowText(true)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const slideColor = 'grey'
  const color = isLight ? 'black' : 'white';

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
          <div className='home-button-container'>
            <Link to={'/'} className='home-button-link'>
              <span >Home</span>
            </Link>
          </div>
        )}
      </div>
      <div className='header-navbar'>
        <ul>
          <li>
            <Link to='/Repositories'>
            <DominoSlide 
            content="Repositories" 
            fontSize="30px" 
            color={color} 
            slideColor={slideColor}/>
            </Link>
          </li>
          <li>
            <Link to='/Bio'>
              <DominoSlide 
              content="Bio" 
              fontSize="30px" 
              color={color} 
              slideColor={slideColor} />
            </Link>
          </li>
          <li>
            <Link to='/Contact'>
              <DominoSlide 
              content="Contact" 
              fontSize="30px" 
              color={color} 
              slideColor={slideColor} />
            </Link>
          </li>
          
        </ul>
      </div>
      <div className='header-toggle'>
        <Toggle isChecked={isLight} handleChange={() => setIsLight(!isLight)} isText={showText} />
      </div>
    </section>
  );
  
}

export default Header;

