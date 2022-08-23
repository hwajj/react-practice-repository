import { useReducer, useState } from 'react';

import AuthContext from './auth-context';

const defaultAuthState = {
  isLoggedIn: false,
};

const IdCheck = async ({ email, password }) => {
  const idList = await fetch(
    'https://react-http-9393c-default-rtdb.asia-southeast1.firebasedatabase.app/shopUsers.json'
  );

  const dbData = await idList.json();

  const loginData = Object.entries(dbData)
    .map((e) => e[1])
    .filter((data) => data.id === email);
  let loginSuccess = false;
  if (loginData.length > 0) {
    loginSuccess = loginData[0].password === password;
  }
  console.log(loginData);

  return loginSuccess;
};
const authReducer = (state, action) => {
  if (action.type === 'LOGIN_TRY') {
    let loginResult = false;

    loginResult = IdCheck(action.data);

    console.log(loginResult);
    return {
      isLoggedIn: loginResult,
    };
  }
};
const AuthProvider = (props) => {
  const [loginState, dispatchLoginState] = useReducer(
    authReducer,
    defaultAuthState
  );

  const logInTryHandler = (event) => {
    dispatchLoginState({ type: 'LOGIN_TRY', data: event });
  };

  const authContext = {
    isLoggedIn: loginState.isLoggedIn,
    loginTry: logInTryHandler,
  };
  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
