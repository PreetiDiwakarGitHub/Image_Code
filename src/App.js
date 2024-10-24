import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer';
import Winter from './Component/Winter';
import Summer from './Component/Summer';
import Spring from './Component/Spring';
import Autumn from './Component/Autumn';
import Home from './Component/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Footer />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/winter" element={<Winter />} />
          <Route path="/summer" element={<Summer />} />
          <Route path="/spring" element={<Spring />} />
          <Route path="/autumn" element={<Autumn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

