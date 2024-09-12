import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBarComponente from './components/NavBarComponente';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <Router>
      <NavBarComponente />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Welcome to MyApp!" />} />
          <Route path="/about" element={<ItemListContainer greeting="Producto main" />} />
          <Route path="/contact" element={<ItemListContainer greeting="Producto 2" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
