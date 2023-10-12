import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TemplateGenerator from './pages/TemplateGenerator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generator" element={<TemplateGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
