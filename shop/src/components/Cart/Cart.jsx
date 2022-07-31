import React from 'react';
import classes from './Cart.module.css';

const Cart = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onHideCart}></div>
      <div className={classes.modal}>
        <div>상품명</div>
        <div>가격</div>
      </div>
    </>
  );
};

export default Cart;
