// src/components/Searcher.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Searcher() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/search/${encodeURIComponent(query.trim())}`);
  };

  // ⬇️ Enter 키 입력 감지 함수
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={{ display: 'flex', marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="검색할 영화 제목 입력"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown} // ⬅️ 이 부분 추가
        style={{
          flex: 1,
          padding: '12px',
          border: 'none',
          borderRadius: '30px 0 0 30px',
          backgroundColor: '#ddd',
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '12px 20px',
          border: 'none',
          borderRadius: '0 30px 30px 0',
          backgroundColor: '#fff',
          cursor: 'pointer',
        }}
      >
        검색
      </button>
    </div>
  );
}

export default Searcher;