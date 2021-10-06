import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { AboutMe } from './pages/AboutMe/AboutMe';
import { NavBar } from './pages/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/portfolio-dm" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>  
        

    </div>
  );
}

export default App;
