// src/components/MovieDetail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const apiKey = '92b2add0b5f2ccf05b4c938b493452b0';
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=ko-KR`;

    fetch(url)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(err => console.error('상세정보 불러오기 실패:', err));
  }, [id]);

  if (!movie) return <div style={{ color: '#fff' }}>불러오는 중...</div>;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      color: '#fff'
    }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{
          width: '250px',
          borderRadius: '12px',
          marginRight: '30px',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)'
        }}
      />
      <div>
        <h2 style={{ fontSize: '26px' }}>{movie.title}</h2>
        <p style={{ lineHeight: '1.6', marginTop: '10px' }}>
          {movie.overview || '줄거리 정보가 없습니다.'}
        </p>
        <p style={{ marginTop: '15px' }}><strong>개봉일:</strong> {movie.release_date}</p>
        <p><strong>평점:</strong> <span style={{ color: '#ff4444', fontWeight: 'bold' }}>{movie.vote_average}</span></p>
      </div>
    </div>
  );
};

export default MovieDetail;