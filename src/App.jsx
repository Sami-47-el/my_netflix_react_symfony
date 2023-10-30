import './App.css';
import { Search } from './components/Search.jsx';
import { Results } from './components/Results.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';

function App() {

  const handleSearch = (query) => {
    fetch('https://api.tvmaze.com/search/shows?q=' + query)
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <>
      <h1>Netflix TV with React</h1>
      <Search onSearch={handleSearch} />
      
    </>
  );
}

export default App;



