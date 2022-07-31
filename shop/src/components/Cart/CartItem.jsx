import classes from './CartItem.module.css';

const CartItem = (props) => {
  return (
    <>
      <li className={classes['cart-item']}>
        <div>
          <p>{props.name}</p>
        </div>
        <div className={classes.receipt}>
          <span className={classes.price}>{props.price}</span>
          <div className={classes.inputPlusMinus}>
            <span className={classes.minus} onClick={props.onRemove}>
              −
            </span>
            <span> {props.amount}</span>
            <span className={classes.plus} onClick={props.onAdd}>
              +
            </span>
          </div>
        </div>
        <span className={classes.price}>{props.price * props.amount}</span>

        <div className={classes.actions}></div>
      </li>
    </>
  );
};

export default CartItem;
