import React from 'react';
import { IoIosRemoveCircleOutline } from 'react-icons/io';
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md';
import './../css/TodoListItem.css';

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;
  return (
    // <div className="TodoListItem-visualized" style={style}>
    <div className="TodoListItem" style={style}>
      <div
        className={checked ? 'checkbox checked' : 'checkbox'}
        onClick={() => onToggle(id)}
      >
        {checked ? <MdOutlineCheckBox /> : <MdCheckBoxOutlineBlank />}

        <div className="text">{text} </div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <IoIosRemoveCircleOutline />
      </div>
    </div>
    // </div>
  );
};

export default React.memo(TodoListItem);
