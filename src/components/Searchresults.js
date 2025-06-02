//src/components/SearchResults.js

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function SearchResults() {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setError('');
      const apiKey = '92b2add0b5f2ccf05b4c938b493452b0';
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=ko-KR`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          setResults(data.results);
        } else {
          setError('검색 결과가 없습니다.');
        }
      } catch (err) {
        setError('API 요청 중 오류 발생');
      }
    };

    fetchData();
  }, [query]);

  return (
    <div>
      <h2 style={{ color: '#fff' }}>🔍 "{query}" 검색 결과</h2>

      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {results.map(movie => (
          <div key={movie.id} style={{ textAlign: 'center', color: '#fff' }}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <div style={{ marginTop: '10px', fontWeight: 'bold' }}>{movie.title}</div>
            <button
              onClick={() => navigate(`/detail/${movie.id}`)}
              style={{
                marginTop: '10px',
                padding: '6px 12px',
                backgroundColor: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              상세보기
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;