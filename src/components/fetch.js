import React, { useEffect } from "react";

function TMDBFetcher() {
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=92b2add0b5f2ccf05b4c938b493452b0&language=ko-KR&page=1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("네트워크 응답에 문제가 있습니다.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("TMDB 인기 영화 목록:", data.results); // 콘솔에 확인
      })
      .catch((error) => {
        console.error("TMDB API 호출 실패:", error);
      });
  }, []);

  return (
    <div>
      <h1>TMDB에서 데이터 가져오는 중...</h1>
      <p>F12 키를 눌러 콘솔에서 데이터를 확인해보세요.</p>
    </div>
  );
}

export default TMDBFetcher;



