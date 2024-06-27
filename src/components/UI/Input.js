import styles from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.lable}</label>
      {/* ...props.input will pull each name-value pair of the object and turn it into attribut-value pair
      if the props.input is {type: text}, then {...props.input} will get type ='text'*/}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
