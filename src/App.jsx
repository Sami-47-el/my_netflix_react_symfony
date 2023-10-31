import './App.css';
import { Search } from './components/Search.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Results } from './components/Results.jsx';

function App() {
  console.log('Rendered: App');
  const handleSearch = (query) => {
    fetch('https://api.tvmaze.com/search/shows?q=' + query)
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => console.error('Error fetching data:', error));
      
  };
  
  return (
    <>
    <div class="container">
        <div class="row">
          <div class="col"></div>
          <nav class="navbar navbar-expand-lg bg-light col mt-4">
            <div class="container-fluid">
              <button class="navbar-toggler mx-auto pt-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <img src="https://i.imgur.com/FkSgrI7.png" alt="Toggler Icon" width="65px"/>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                  <li class="nav-item">
                    <a class="nav-link" href="index.html">home</a>
                  </li>
                  <li class="nav-item">
                  <Link to="/about" className="nav-link">
                About
              </Link>
                  </li>
                  <li class="nav-item">
                  <Link to="/show/1" className="nav-link">
                     Show
                  </Link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contact.html">contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div class="col"></div>
        </div>
      </div>


      <h1 className='mt-5'>Netflix TV with React</h1>
      <div className="box">
          <span></span>
          <span></span>
          <span></span>
      </div>
      <Search onSearch={handleSearch} />
    </>
  );
}

export default App;



