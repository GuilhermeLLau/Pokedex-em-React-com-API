import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import PokemonDetails from './Components/PokemonDetails/PokemonDetails';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes basename="/Pokedex-em-React-com-API">
          <Route exact path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
