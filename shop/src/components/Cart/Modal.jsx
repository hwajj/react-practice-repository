import React from 'react';
import classes from './Modal.module.css';

const Modal = (props) => (
  <>
    <div className={classes.backdrop} onClick={props.onHideCart}></div>
    <div className={classes.modal}>
      <span className={classes.close} onClick={props.onHideCart}>
        X
      </span>
      {props.children}
    </div>
  </>
);

export default Modal;
