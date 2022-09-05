import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo 를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo 를 체크/체크해제 함
const REMOVE = 'todos/REMOVE'; // todo 를 제거함

//initial id 2 까지 존재함
let id = 3; // insert 가 호출 될 때마다 1씩 더해집니다.

//액션생성함수
// export const changeInput = (input) => ({ type: CHANGE_INPUT, input });
// export const insert = (text) => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false,
//   },
// });

// export const toggle = (id) => ({ type: TOGGLE, id });
// export const remove = (id) => ({ type: REMOVE, id });

//createAction 사용한 액션생성
export const changeInput = createAction(CHANGE_INPUT, (input) => input);
//결과 { type :CHANGE_INPUT , payload : input }
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));
//결과 { type : INSERT , payload : text => ({ id: id++, text, done:false}) }

export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);
//결과 { type :CHANGE_INPUT , payload : id }

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    },
  ],
};

//todos reducer
// function todos(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return { ...state, input: action.input };
//     case INSERT:
//       return { ...state, todos: state.todos.concat(action.todo) };

//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.todo ? { ...todo, done: !todo.done } : todo
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };

//     default:
//       console.log(state.todos);
//       return state;
//   }
// }

//handleActions를 사용한 reducer
const todos = handleActions(
  {
    // [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
    // 객체비구조화 할당 사용
    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),

    // 객체비구조화 할당 및 immer 사용
    // [CHANGE_INPUT]: (state, { payload: input }) =>
    //   produce(state, (draft) => {
    //     draft.input = input;
    //   }),

    // [INSERT]: (state, action) => ({
    //     ...state,
    //     todos: state.todos.concat(action.payload),
    //   }),

    // 객체비구조화 할당 사용
    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      todos: state.todos.concat(todo),
    }),

    // [TOGGLE]: (state, action) => ({
    //   ...state,
    //   todos: state.todos.map((todo) =>
    //     todo.id === action.payload ? { ...todo, done: !todo.done } : todo
    //   ),
    // }),

    //객체 비구조화 할당 사용
    // [TOGGLE]: (state, { payload: id }) => ({
    //   ...state,
    //   todos: state.todos.map((todo) =>
    //     todo.id === id ? { ...todo, done: !todo.done } : todo
    //   ),
    // }),

    //객체 비구조화 할당 + immer 사용
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),

    // [REMOVE]: (state, action) => ({
    //     ...state,
    //     todos: state.todos.filter((todo) => todo.id !== action.payload),
    //   }),

    //객체 비구조화 할당 사용
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
  },
  initialState
);

export default todos;
