import useTypingEffect from "./utils/useTypingEffect";
import useTypingEffectV2 from "./utils/useTypingEffectV2";
import useTypingEffectV3 from "./utils/useTypingEffectV3";
import './App.css';
import React, {useState,useMemo} from "react";
import TypingEffectV2 from "./utils/useTypingEffectV2"; //좋은 방법
import useTypingEffectV2Bad from "./utils/useTypingEffectV2Bad";

function App() {
  const [count, setCount] =useState(0)
  const msg = "안녕하세요 테스트 1 입니다~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~💚 💚"
  const TextContent = useTypingEffectV2Bad({ message: msg })  // 나쁜 방법
  
  
 // const TextContent = React.memo(() => useTypingEffectV2Bad({ message: "안녕하세요 테스트2 Bad 입니다~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~💚 💚" }));
  return (
    <div className="App">
      <div>
  
        <TextContent />
        {/*<TypingEffectV2 message="안녕하세요 테스트 2 입니다~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~💚 💚" />*/}
 
      </div>
      
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(prev=> prev+1)}>버어튼</button>
      </div>
    </div>
  );
}

export default App;
