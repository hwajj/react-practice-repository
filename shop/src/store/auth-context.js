import React from 'react';

const AuthContext = React.createContext({
  loginTry: () => {},
  isLoggedIn: false,
});

export default AuthContext;
