import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef } from "react";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const formSubmitedHandler = (event) => {
    event.preventDefault();
    //amountInputRef.current will return the HTML element that used ref
    // each input element has a build-in value property that holds the current input value which is a string
    const enteredAmount = amountInputRef.current.value;
    //adding a + before a sting can convert the string to a number
    const enteredAmountNum = +enteredAmount;

    props.onAddToCart(enteredAmountNum);
  };

  return (
    <form className={styles.form} onSubmit={formSubmitedHandler}>
      <Input
        ref={amountInputRef}
        lable="Amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "100",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> + Add</button>
    </form>
  );
};

export default MealItemForm;
