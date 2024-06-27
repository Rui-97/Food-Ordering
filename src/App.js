import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartShowen, setIsCartShowen] = useState(false);

  const showCartHandler = () => {
    setIsCartShowen(true);
  };
  const hideCartHandler = () => {
    setIsCartShowen(false);
  };

  return (
    <CartProvider>
      {isCartShowen && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler}></Header>
      <Meals />
    </CartProvider>
  );
}

export default App;
