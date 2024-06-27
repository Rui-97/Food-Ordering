import CartContext from "./cart-context";
import { useReducer } from "react";
const defaultCartState = {
  item: [],
  totoalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totoalAmount + action.item.price * action.item.amount;

    //findIndex() will return -1 if there has no element meet the requiement
    //or retrun the index of the element that meets the requirement
    let updatedItems;
    const existingCartItemIndex = state.item.findIndex((element) => {
      return element.name === action.item.name;
    });
    const existingCartItem = state.item[existingCartItemIndex];

    if (existingCartItemIndex !== -1) {
      const updatedItem = {
        ...existingCartItem,
        //rewrite the amount of the added item.
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.item];
      //rewrite the added object in the item array.
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      //.cancat() method adds new element in the array without changing
      // the original array
      updatedItems = state.item.concat(action.item);
    }

    return { item: updatedItems, totoalAmount: updatedTotalAmount };
  }

  if (action.type === "REMOVE") {
    let updatedItems;
    const existingCartItemIndex = state.item.findIndex((element) => {
      return element.id === action.id;
    });
    const existingCartItem = state.item[existingCartItemIndex];
    if (existingCartItem.amount === 1) {
      updatedItems = state.item.filter((element) => {
        return element.id !== action.id;
      });
    } else {
      let updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.item];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    let updatedTotalAmount = state.totoalAmount - existingCartItem.price;
    return { item: updatedItems, totoalAmount: updatedTotalAmount };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  return (
    <CartContext.Provider
      value={{
        item: cartState.item,
        totoalAmount: cartState.totoalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
