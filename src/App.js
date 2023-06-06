import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Quotes from './components/Quotes';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <>
        <nav className="my-nav">
          <h5 className="math-heading">Math Magician</h5>
          <ul className="my-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Calculator">Calculator</Link></li>
            <li><Link to="/Quotes">Qoutes</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Quotes" element={<Quotes />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
