import CartIcon from "./CartIcon";
import styles from "./HeaderCartBtn.module.css";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

const HeaderCartBtn = (props) => {
  //the input parameter is the context not the provider
  const cartCtx = useContext(CartContext);
  const [isBtnHilighted, setIsBtnHilighted] = useState(false);
  //destructuring:easily access the value of an object and assign it to varible.
  //same as: const item = cartCtx.item
  const { item } = cartCtx;
  console.log(item);
  //the default curTotalNum is 0 as shown in the second argument of .reduce()
  // the .reduce() will go through each element in the array and excecute the code after return
  // finnally return one sigle accumilative result
  const numberOfCartItems = cartCtx.item.reduce((curTotalNum, element) => {
    return curTotalNum + element.amount;
  }, 0);

  // bump animation
  const btnClass = `${styles.button} ${isBtnHilighted ? styles.bump : ""} `;
  useEffect(() => {
    if (item.length === 0) {
      return;
    }
    setIsBtnHilighted(true);
    const timer = setTimeout(() => {
      setIsBtnHilighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [item]);

  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartBtn;
