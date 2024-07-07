import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Proprietary Software License
// Copyright (c) 2024 Mark Robertson
// See LICENSE.txt file for details.

import './App.css';

import Home from './components/pages/Home';
import About from './components/pages/About/About';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />

            </Routes>
          </div>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
