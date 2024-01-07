import { useState, useEffect } from "react";

function Hello() {
  //useEffect 사용 Case1 : useEffect에서 호출하는 로직을 각각 분리해서 선언
  function byeFn() {
    console.log("1 bye :(");
  }
  function hiFn() {
    console.log("1 hi :)");
    return byeFn; //component가 destoryed 될 때 실행하고 싶은 function을 리턴
  }
  useEffect(hiFn, []);

  //**useEffect 사용 Case2 : useEffect에서 () => 사용해서 선언 (제일 자주 사용하는 표현식)
  useEffect(() => {
    console.log("2 hi :)");
    return () => console.log("2 bye :(");
  }, []);

  //useEffect 사용 Case3 : useEffect에서 호출하는 로직을 function으로 선언해서 사용
  useEffect(function () {
    console.log("3 hi :)");
    return function () {
      console.log("3 bye :(");
    };
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
