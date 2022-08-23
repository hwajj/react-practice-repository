import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    changeName(state) {
      state.name = 'park'; //immer.js도움
      // return { name: 'park', age: 20 };
    },

    increaseAge(state, action) {
      state.age += action.payload;
    },
  },
});

export let { changeName, increaseAge } = user.actions;

export default user;
