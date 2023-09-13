import useTypingEffect from "./utils/useTypingEffect";
import useTypingEffectV2 from "./utils/TypingEffect";
import useTypingEffectV3 from "./utils/useTypingEffectV3";
import './App.css';
import React, {useState,useMemo, useCallback} from "react";
import TypingEffect from "./utils/TypingEffect"; //좋은 방법
import typingEffectBad from "./utils/typingEffectBad";

function App() {
  const [count, setCount] =useState(0)
  const msg = "안녕하세요 테스트 1 입니다~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~💚 💚"
  const TextContent =  typingEffectBad({ message: msg })  //
  
  
  return (
    <div className="App">
      <div>
  
        <TextContent />
        <TypingEffect message="안녕하세요 테스트 2 입니다~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~💚 💚" />
 
      </div>
      
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(prev=> prev+1)}>버어튼</button>
      </div>
    </div>
  );
}

export default App;
