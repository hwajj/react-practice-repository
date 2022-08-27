# 리액트를 다루는 기술 
## 10장 일정관리 웹 애플리케이션 만들기

### Component
- TodoTemplate : 화면을 가운데로 정렬, 앱타이틀 보여줌. children으로 내부 jsx받아와서 렌더링

- TodoList : todos 배열을 props로 받아온 후, map으로 요소 각각을 TodoListItem에 전달

- TodoListItem: 각 할일 정보에 대한 정보를 보여주는 컴포넌트. Todo객체를 prop로 받아와서 상태에 따라 다른 스타일의 ui 보여줌.

- TodoInsert : 새로운 항목을 입력하고 추가할수있는 컴포넌트. state통해 input의 상태 관리


### useCallback
- TodoInsert 컴포넌트에서 인풋을 useState로 관리할 때 값을 input에 onChange를 걸어서 setState한다. 이때 onChange 함수를 useCallback 으로 감싸서 리렌더링될때마다 함수가 다시 만들어지는 것을 방지한다. useCallback의 의존성 배열에 있는 값이 변할때마다 함수가 재생성된다. TodoInsert가 props로 받는 함수와 state로 관리하는 변수를 의존성 배열에 넣었다.


