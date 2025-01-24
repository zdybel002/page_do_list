import React from "react";
import styles from "./Wrapper.module.css";

function Wrapper({ children }) {
  return <div className={styles.main_block}>{children}</div>;
}

export default Wrapper;
