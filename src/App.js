import { BrowserRouter, Routes, Route } from "react-router-dom"; //BrowserRouter = 일반적인 url 생김새, hashRouter = url에 #과 같은 형태가 붙음
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  //이제 App에서는 요청된 url에 따라 해당하는 component를 보여주는 역할을 수행 (=router)
  //한번에 1개의 Router만 렌더링하기 위해 Routes 컴포넌트를 사용함(기존에는 Switch였으나 react-router-dom 버전6에서 Switch->Routes로 변경됨)
  return (
    //PUBLIC_URL은 package.json에서 설정한 homepage url이 적용된다
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/hello" element={<h1>Hello</h1>}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
