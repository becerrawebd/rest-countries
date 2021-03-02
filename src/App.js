import React from 'react';
import { Router, Route } from "wouter"
import FilterByCountry from './components/FilterByCountry';
import FilterByRegion from './components/FilterByRegion';
import Header from './components/Header';

function App() {
  return (
    <div className="App bg-dark">
      <Header />
      <FilterByCountry />
      <FilterByRegion />
    </div>
  );
}

export default App;
