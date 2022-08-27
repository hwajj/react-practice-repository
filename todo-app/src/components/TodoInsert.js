import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './../css/TodoInsert.css';
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChangeHandler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (value.length > 0) {
        onInsert(value);
        setValue('');
      }
    },
    [onInsert, value],
  );
  const onClickHandler = useCallback(() => {
    if (value.length > 0) {
      onInsert(value);
      setValue('');
    } else {
      alert('할 일을 입력해주세요');
    }
  }, [onInsert, value]);
  return (
    <form className="TodoInsert" onSubmit={onSubmitHandler}>
      <input
        placeholder="할 일 입력하세요"
        value={value}
        onChange={onChangeHandler}
      />
      <button type="submit" onClick={onClickHandler}>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
