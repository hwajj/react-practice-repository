import React, { useState } from 'react';
import styles from './Login.module.css';

function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  function emailChangeHandler(event) {
    console.log(event.target.value);
    setEnteredEmail(event.target.value);
  }
  function passwordChangeHandler(event) {
    console.log(event.target.value);
    setEnteredPassword(event.target.value);
  }
  return (
    <div className='container'>
      <form>
        <div className={styles.control}>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            label='E-mail'
            type='email'
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            label='Password'
            type='password'
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
        </div>
        <button className={styles.button} type='submit'>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
