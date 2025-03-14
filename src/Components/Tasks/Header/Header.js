import React, { useState } from "react"
import styles from "./Header.module.css"
import logo from "../../../img/logo.png"


function Header(props){

  const toggleVisibility = () => {
    props.onShowAddNewTaskHandler(!props.isVisible);
  };

    return(
      <div className={styles.container}>
        <div className={styles.container_logo}>
          <img src={logo} alt="some" className={styles.header_img_logo}/>
          <h3 className={styles.header_logo}>Task Manager</h3>
        </div>
        <button className={styles.header_btm} onClick={toggleVisibility}>Add New Task</button>   
      </div>
    )
}

export default Header;