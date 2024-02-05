import './reset.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Header from './components/header';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

function App() {
  return (
    <div className='app'>
        <Router>
          <Routes>
            <Route
              path='/'
              element={<Home/>}
            />
            <Route 
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </Router>
      <footer>
        Created by <strong>Jeremy🦈</strong> <br></br>
        last updated: June 2023 - V2
      </footer>
    </div>
  );
}

export default App;
