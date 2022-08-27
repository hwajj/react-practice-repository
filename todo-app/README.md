# 리액트를 다루는 기술 
## 10장 일정관리 웹 애플리케이션 만들기

### Component
- TodoTemplate : 화면을 가운데로 정렬, 앱타이틀 보여줌. children으로 내부 jsx받아와서 렌더링

- TodoList : todos 배열을 props로 받아온 후, map으로 요소 각각을 TodoListItem에 전달

- TodoListItem: 각 할일 정보에 대한 정보를 보여주는 컴포넌트. Todo객체를 prop로 받아와서 상태에 따라 다른 스타일의 ui 보여줌.

- TodoInsert : 새로운 항목을 입력하고 추가할수있는 컴포넌트. state통해 input의 상태 관리


### useCallback
- TodoInsert 컴포넌트에서 인풋을 useState로 관리할 때 값을 input에 onChange를 걸어서 setState한다. 이때 onChange 함수를 useCallback 으로 감싸서 리렌더링될때마다 함수가 다시 만들어지는 것을 방지한다. useCallback의 의존성 배열에 있는 값이 변할때마다 함수가 재생성된다. TodoInsert가 props로 받는 함수와 state로 관리하는 변수를 의존성 배열에 넣었다.





## 11장 컴포넌트 성능 최적화

### 많은 데이터 렌더링하기 
- 임의로 많은 데이터 입력
```
function createBulkTodos() {
  const array = [];
  for (let i = 0; i < 2500; i++) {
    array.push({
      id: i,
      text: `${i} 번째 할일`,
      checked: false,
    });
  }
  return array;
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(2501);

```
useState 안에 넣는 초기값에 함수 createBulkTodos() 라고 넣지 않고, createBulkTodos  함수를 넣으면 컴포넌트가 처음 렌더링 될 때만 createBulkTodos 함수가 실행된다.

### 느려지는 원인
리렌더링이 발생하는 상황은 다음과 같다.
- 자신이 전달받은 props가 변경될 때 
- 자신의 state가 바뀔 때 
- 부모컴포넌트가 리렌더링 될 때 
- forceUpdate함수가 실행될 때 
현재 1개만 클릭해도 나머지 2499개가 모두 리렌더링 되는상황. TodoListItem컴포넌트가 받은 props (todo) 가  바뀌지 않았을 때도 리렌더링 되는 것이 문제이다.

### React.memo를 사용하여 컴포넌트 성능 최적화
- react.memo는 컴포넌트에 들어가는 모든 props를 확인한 뒤, 이를 기존의 props 값과 비교하도록 리액트에 전달한다.
그리고 props의 값이 바뀐 경우에만 컴포넌트를 재실행 및 재평가 한다.
부모컴포넌트가 변경되었음에도 자식컴포넌트에 내려주는 props는 변하지 않았다면 컴포넌트의 실행을 건너뛴다.
재실행되지 않는 자식컴포넌트에 포함된 다른 컴포넌트들도 재실행되지 않는다.


### 함수형 setState로 useCallback 의존성 배열 수정
setState함수의 인자로 **상태** 대신 이전 상태를 전달하여 상태를 업데이트하는 **함수** 를 넣어준다.

- 리팩토링 전  
    setState(todos 배열)
    
    ```
    const onRemoveHandler = useCallback(
      (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
      },
      [todos],
    );
    ```
    
    todos 배열 상태를 기준으로 update= todos가 바뀔때마다 useCallback 함수 재생성 해서 setState 안의 상태 업데이트해야함  
    \=> 의존성 배열에 todos 넣음

    

- 리팩토링 후  
    setState(todos 이전상태를 전달하여 상태를 업데이트 하는 함수)
    
    ```
      const onRemoveHandler = useCallback(
      (id) => {
        setTodos(todos => todos.filter((todo) => todo.id !== id));
      },
      [],
    );
    ```
    
    바로 이전상태를 전달하여 상태를 업데이트 한다 = todos 바껴도 이전 상태를 기준으로 업데이트 하는 함수는 바뀌지 않음  
    \=> 의존성 배열에 todos 넣을 필요 없음