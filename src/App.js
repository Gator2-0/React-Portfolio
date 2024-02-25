import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Header from './components/header';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Bio from './pages/Bio';
import Contact from'./pages/Contact';
import React, {useState} from 'react';
import { Toggle } from './components/toggle';
import useLocalStorage from 'use-local-storage'

function App() {
  //useLocalstorage- first value is the key and second is the default value fo the key.
  const [isLight, setIsLight] = useLocalStorage("isLight", false);


  return (
    <div className='app' data-theme={isLight ? "light":"dark"}>
      
        <Router>
          <Toggle
            isChecked={isLight}
            handleChange={() => setIsLight(!isLight)}
          />
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
              path='/Projects'
              element={<Projects />}
            />
            <Route
              path='/Bio'
              element={<Bio />}
            />
            <Route
              path='/Contact'
              element={<Contact />}
            />
            
          </Routes>
        </Router>
      <footer>
        Created by <strong>Jeremy🦈</strong> <br></br>
        last updated: feb 2024 - V2
      </footer>
    </div>
  );
}

export default App;
