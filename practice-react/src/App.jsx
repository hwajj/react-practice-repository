import { useState, useEffect } from "react";
import "./App.css";
// import { longTimeFn } from "./js /longTimeFn.js";

function App() {
  const [text, setText] = useState("진행중");
  const longTimeFn = () => {
    console.log(" something gogo ");
    // await serverSideSth();
    return new Promise(function (resolve, reject) {
      console.log("...ing");
      setTimeout(() => resolve("완료!"), 1500);
    });
  };

  // useEffect 안에서 async 사용하기
  useEffect(() => {
    (async () => {
      console.log(text);
      const res = await longTimeFn();
      setText(res);
      console.log(text); //
    })();

    // smfn();
    return () => {};
  }, []);

  return <>{text}</>;
}

export default App;
