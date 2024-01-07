import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("i run only one"); //처음 render될 때만 실행되는 코드 (1회만 호출되는 로직)
  }, []); //watch대상이 없으므로 최초 1번만 실행됨
  useEffect(() => {
    console.log("i run when 'keyword' : ", keyword, " changes");
  }, [keyword]); //keyword가 변할 때만 useEffect 실행 (watch 대상)
  useEffect(() => {
    console.log("i run when 'counter' : ", counter, " changes");
  }, [counter]);
  useEffect(() => {
    console.log("i run when keyword & counter changes");
  }, [keyword, counter]); //한개 이상의 변수에 대해서 watch 설정이 가능하다
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
