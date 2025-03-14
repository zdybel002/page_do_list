import React from "react";
import styles from "./NewTask.module.css"

function NewTask(props) {
  const titleInputRef = React.createRef();
  const descrbeInputRef = React.createRef();

  const handleButtonClick = () => {
    console.log(descrbeInputRef.current.value);


    props.onAddTask(titleInputRef.current.value,descrbeInputRef.current.value);


    titleInputRef.current.value = "";
    descrbeInputRef.current.value = "";
    props.onshowAddNewTaskHandler(!props.isVisibleTaskHandler)
  };

  return (
    <div className={styles}>
      <h3 className = {styles.new_task_heading}>
        Add New Task
      </h3>
      <input type="text" ref={titleInputRef} placeholder="Task Title" 
             className={`${styles.task_input} ${styles.input1} `}/>

      <input type="text" ref={descrbeInputRef} placeholder="Task Description" 
             className={`${styles.task_input} ${styles.input2} `}/>

      <button onClick={handleButtonClick} className={styles.btm}>Dodaj</button>
    </div>
  );
}

export default NewTask;
