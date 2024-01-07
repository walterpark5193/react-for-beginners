import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail() {
  //Movie의 title 클릭 시 <a href="urlPath">로 상세 페이지로 이동하게 되면 페이지 전체가 다시 실행된다! (=Router의 Link를 사용하는 이유)
  const { id } = useParams();
  const getMovieDetail = async () => {
    const responseJson = await //await는 async 함수 내부에서만 사용이 가능하다.
    (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    // setMovies(responseJson.data.movies);
    // setLoading(false);
    console.log(responseJson);
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <h1>
      [마지막 단계 : 코드 챌린지] - Home에서 해줬던 loading을 Detail에 해주기 -
      movie가 State에 없음. 현재 API에서 json을 받아와서 아무것도 안 하고 있는
      상태. -> 힌트: json을 state에 넣어보기
    </h1>
  );
}

export default Detail;
