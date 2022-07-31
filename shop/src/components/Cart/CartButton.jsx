import React from 'react';
import CartIcon from './CartIcon';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  return (
    <>
      <button className={classes.button} onClick={props.onShowCart}>
        <span>
          <CartIcon />
        </span>
        <span>3</span>
      </button>
    </>
  );
};

export default CartButton;
