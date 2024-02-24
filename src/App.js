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

function App() {
  return (
    <div className='app'>
      
        <Router>
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
