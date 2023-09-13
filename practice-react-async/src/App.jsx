import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleChange = () => {
    setCount((c) => c + 1); //2. setState는 batch업데이트~  업데이트를 예약
    console.log("synchronous code"); // 3. 동기적으로 처리 => "synchronous code" 출력
  };

  const changeAndValidate = async () => {
    await handleChange(); //1. 버튼 클릭시 실행  ~ await handleChange : 콜백함수 완료시까지 기다려줌
    // 4. handle change가 아무것도 리턴하지 않음 > resolve(undefined) 가 setState 이벤트 큐 다음에 위치
    // setState부터 실행 >  6. resolve 도 완료 > 다음코드로 나아갈수 있음
    console.log("asynchronous validation code"); // 7. 출력
  };

  useEffect(() => {
    console.log("use effect - updated component"); // 0. 최초 렌더링에 출력
    return () => {};
  }, [count]); // 5. count 바뀌어서 update 출력

  // 클릭했을때 아래와 같이 출력되는 이유
  // synchronous code
  // use effect - updated component
  // asynchronous validation code
  return (
    <>
      <button onClick={changeAndValidate}>change gogo </button>
      <div>{count}</div>
    </>
  );
}

export default App;
