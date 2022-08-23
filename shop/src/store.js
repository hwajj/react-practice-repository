import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './store/userSlice';

let cart = createSlice({
  name: 'cart',
  initialState: [
    {
      id: 0,
      name: 'White and Black',
      count: 1,
    },
    {
      id: 1,
      name: 'Red Knit',
      count: 1,
    },
  ],
  reducers: {
    addCount(state, action) {
      //action.payload 가 id
      //action.payload와 같은 id 찾아야
      let id = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[id].count++;
    },
  },
});

export let { addCount } = cart.actions;

export default configureStore({
  reducer: {
    userInfo: user.reducer,
    cart: cart.reducer,
  },
});
