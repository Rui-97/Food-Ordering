import React from "react";

const CartContext = React.createContext({
  item: [],
  totoalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;
