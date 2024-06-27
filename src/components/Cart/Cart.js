import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const removeCartItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const addCartItemHamdler = (item) => {
    // one click add 1 on the amount,not the amount the item already has
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItem = cartCtx.item.map((element) => {
    return (
      <CartItem
        key={element.id}
        name={element.name}
        price={element.price}
        amount={element.amount}
        onRemove={() => {
          removeCartItemHandler(element.id);
        }}
        onAdd={() => {
          addCartItemHamdler(element);
        }}
      />
    );
  });
  const cartTotalAmount = `$${cartCtx.totoalAmount.toFixed(2)}`;
  const hasItems = cartCtx.item.length > 0;

  return (
    <Modal onClose={props.onHideCart}>
      <ul className={styles["cart-items"]}>{cartItem}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{cartTotalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
