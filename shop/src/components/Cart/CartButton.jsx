import React, { useState, useContext, useEffect } from 'react';
import CartIcon from './CartIcon';
import classes from './CartButton.module.css';
import CartContext from '../../store/cart-context';

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <>
      <button className={classes.button} onClick={props.onShowCart}>
        <span>
          <CartIcon />
        </span>
        <span>
          {Number(
            cartCtx.items.reduce((sum, cur) => {
              return sum + Number(cur.amount);
            }, 0)
          )}
        </span>
      </button>
    </>
  );
};

export default CartButton;
