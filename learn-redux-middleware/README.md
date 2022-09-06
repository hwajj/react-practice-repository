# 리액트를 다루는 기술 18강 미들웨어

- 미들웨어란?
 액션을 디스패치했을 때 리듀서에서 이를 처리하기에 앞서 사전에 지정된 작업들을 실행함

- 미들웨어의 구조
    ```
    const loggerMiddleware = store => next => action {
        // 미들웨어 기본구조

    }

    export default loggerMiddleware;
    ```

    - 미들웨어는 함수를 반환하는 함수를 반환하는 함수 
    - store는 리덕스 스토어 인스턴스, action은 디스패치된 액션을 가리키며 
    next는 함수형태로 next(action)을 호출하면 그다음에 처리해야할 미들웨어에게 액션을 넘겨주고, 미들웨어가 없다면 리듀서에게 액션을 넘겨준다.