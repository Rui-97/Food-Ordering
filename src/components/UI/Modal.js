import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  //the reason to use multiple-level props instead of context is that
  //this will make the Modal component reusable
  return <div className={styles.backdrop} onClick={props.onClose} />;
};
const Overlayer = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("modal-root")
      )}
      {ReactDOM.createPortal(
        <Overlayer>{props.children}</Overlayer>,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default Modal;
