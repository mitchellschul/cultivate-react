import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
