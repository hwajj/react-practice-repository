import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useState, useRef, useCallback, useReducer } from 'react';

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

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': //새로추가
      return todos.concat(action.todo);
    case 'REMOVE': //새로추가
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE': //토글
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );

    default:
      return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  // const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(2501);

  const onInsertHandler = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };

    //setTodos((todos) => todos.concat(todo));

    dispatch({ type: 'INSERT', todo });

    nextId.current++;
  }, []);

  const onRemoveHandler = useCallback((id) => {
    // setTodos((todos) => todos.filter((todo) => todo.id !== id));

    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggleHandler = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
    // setTodos((todos) =>
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    //   ),
    // );
  }, []);
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsertHandler} />
      <TodoList
        todos={todos}
        onRemove={onRemoveHandler}
        onToggle={onToggleHandler}
      />
    </TodoTemplate>
  );
};

export default App;
