import './App.css';
import Header from './components/Header';
import Portfolio from './components/portfolio';

function App() {
  return (
    <div>
      <div className="app">
        <Header/>
        <Portfolio/>
      </div>
      <footer>
        Created by <strong>Jeremy🦈</strong> <br></br>
        last updated: June 2023 - V2
      </footer>
    </div>
  );
}

export default App;
