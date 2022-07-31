import React, { useContext } from 'react';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Modal from './Modal';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: +1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      <div>
        <span> 상품명</span>
        <span>가격</span>
        <span> 수량</span>
        <span>합계</span>
      </div>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes['total-amount']}>
        <span>Total Amount</span>
        <span>
          {Number(
            cartCtx.items.reduce((sum, cur) => {
              return sum + cur.amount;
            }, 0)
          )}
        </span>
        <span> {cartCtx.totalAmount}</span>
      </div>
      <button className={classes.orderBtn}>주문</button>
    </Modal>
  );
};

export default Cart;
