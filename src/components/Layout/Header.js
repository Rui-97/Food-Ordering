import { Fragment } from "react";
import headerImg from "../../assets/meals.jpeg";
import HeaderCartBtn from "./HeaderCartBtn.js";

import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Rui's Chengdu</h1>
        <HeaderCartBtn onClick={props.onShowCart} />
      </header>
      {/* styles['main-image']: because the name contains - */}
      <div className={styles["main-image"]}>
        <img src={headerImg} alt="a table full of delicious food"></img>
      </div>
    </Fragment>
  );
};
export default Header;
