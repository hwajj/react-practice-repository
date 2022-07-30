import React, { useState, useReducer, useEffect, useRef } from 'react';
import styles from './Login.module.css';

function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState('');
  //onst [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  //const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordReducer = (state, action) => {
    //8 ~ 16자 영문, 숫자 조합
    var regExp = /^[\S]{6,10}$/;

    if (action.type == 'USER_INPUT') {
      if (regExp.test(action.val) == false) {
        passwordInputRef.current.setCustomValidity(
          '공백을 제외하고 6-10자로 입력해주세요'
        );
      } else {
        passwordInputRef.current.setCustomValidity('');
      }
      console.log();
      return { value: action.val, isValid: regExp.test(action.val) };
    }

    if (action.type == 'USER_BLUR') {
      return {
        value: state.value,
        isValid: regExp.test(state.value),
      };
    }

    return { value: '', isValid: false, message: '' };
  };

  const emailReducer = (state, action) => {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (action.type == 'USER_INPUT') {
      if (regExp.test(action.val) == false) {
        emailInputRef.current.setCustomValidity(
          '이메일 형식에 맞게 입력해주세요'
        );
      } else {
        emailInputRef.current.setCustomValidity('');
      }
      return { value: action.val, isValid: regExp.test(action.val) };
    }

    if (action.type == 'USER_BLUR') {
      return { value: state.value, isValid: regExp.test(state.value) };
    }

    return { value: '', isValid: false };
  };
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: false,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: false,
  });
  const { isValid: emailValid } = emailState; //alias assignment
  const { isValid: passwordValid } = passwordState;

  useEffect(() => {
    console.log(emailState);
    console.log(passwordState);
    const identifier = setTimeout(() => {
      setFormIsValid(emailValid && passwordValid);
    });
  }, [emailValid, passwordValid]);

  function emailChangeHandler(event) {
    dispatchEmail({
      type: 'USER_INPUT',
      val: event.target.value,
    });
    //setEnteredEmail(event.target.value);
  }
  function passwordChangeHandler(event) {
    dispatchPassword({
      type: 'USER_INPUT',
      val: event.target.value,
      message: event.target,
    });
    //console.log(event.target.value);
    //setEnteredPassword(event.target.value);
  }
  //        className={`${emailState.isValid == false ? 'invalid' : ''}`}
  function emailBlurHandler(event) {
    dispatchEmail({ type: 'USER_BLUR' });
  }

  function passwordBlurHandler() {
    dispatchPassword({ type: 'USER_BLUR' });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      console.log('로그인됨');
    } else if (!emailValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };
  return (
    <div className='container'>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            emailState.isValid == false && emailState.value.length != 0
              ? styles.invalid
              : ''
          }`}
        >
          <label htmlFor='email'>Email</label>
          <input
            ref={emailInputRef}
            id='email'
            label='E-mail'
            type='email'
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            placeholder='이메일 형식으로 입력해주세요'
          />
        </div>
        <div
          className={`${styles.control} ${
            passwordState.isValid == false && passwordState.value.length != 0
              ? styles.invalid
              : ''
          }`}
        >
          <label htmlFor='password'>Password</label>
          <input
            ref={passwordInputRef}
            id='password'
            label='Password'
            type='password'
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            placeholder='공백 제외 6-10자'
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
