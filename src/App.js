import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Repositories from './pages/Repositories';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import Codes from './pages/Codes'
import React from 'react';
import useLocalStorage from 'use-local-storage'

function App() {
  // window.matchmedia let us matche the page them to the user preferred theme set on his windows.
  const userPreference = window.matchMedia("(prefers-color-scheme: light)").matches;
  console.log(userPreference);
  //useLocalstorage- first value is the key and second is the default value fo the key.
  const [isLight] = useLocalStorage("isLight", userPreference);

  return (
    <div className='app' data-theme={isLight ? "light":"dark"}>      
        <Router basename='/React-Portfolio'>
          <Header/>
          <Routes>
            <Route
              path='/'
              element={<Home/>}
            />
            <Route 
              path="*"
              element={<NotFound />}
            />
            <Route
              path='/Repositories'
              element={<Repositories />}
            />
            <Route
              path='/Bio'
              element={<Bio />}
            />
            <Route
              path='/Contact'
              element={<Contact />}
            />
            <Route
              path='/Codes'
              element={<Codes />}
            />
            
          </Routes>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;
