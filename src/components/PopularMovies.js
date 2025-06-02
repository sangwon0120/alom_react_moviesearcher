import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const apiKey = '92b2add0b5f2ccf05b4c938b493452b0';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=1`;

    fetch(url)
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error('인기영화 불러오기 실패:', err));
  }, []);

  return (
    <div>
      <h2 style={{ color: '#fff' }}>🔥 인기 영화</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {movies.map(movie => (
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
};

export default PopularMovies;