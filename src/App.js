// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Searcher from './components/searcher';
import PopularMovies from './components/PopularMovies';
import MovieDetail from './components/MovieDetail';
import SearchResults from './components/Searchresults';

function App() {
  return (
    <Router>
      <div style={{ padding: '30px', backgroundColor: '#111', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={
            <>
              <Searcher />
              <PopularMovies />
            </>
          } />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="/detail/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
