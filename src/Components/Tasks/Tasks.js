import React, { useState } from "react";

import NewTask from "../NewTask/NewTask";
import CurrentTask from "../CurrentTask/CurrentTask";
import FinishTask from "../FinishTask/FinishTask";

import styles from "./Tasks.module.css";
import Header from "./Header/Header";


function Tasks() {
  // Stany Aktualnych zadań
  const [tasks, setTasks] = useState([
    { title: "Course", description: "Build an online course - 1 hour", id: "t1" },
    { title: "Stretch", description: "Stretch & Recharge - 15 min", id: "t2" },
    { title: "Lesson Planning", description: "Crafting lesson plans - 1 hour", id: "t3" },
  ]);
  
  // Completed tasks state
  const [oldTasks, setOldTasks] = useState([
    { title: "Writing", description: "Write a compelling article - 30 minutes", id: "t12" },
    { title: "Break", description: "Take a power break - 10 minutes", id: "t23" },
    { title: "Reading", description: "Dive into a gripping book - 1 hour", id: "t31" },
  ]);
  
  
  const [isVisibleTaskHandler, setIsVisibleTaskHandler] = useState(false);

  // Show add new Task
  const showAddNewTaskHandler = () => {
    setIsVisibleTaskHandler((prev) => !prev);
  }


  // add new task
  const addTaskHandler = (inputTitle, inputDescribe) => {
    setTasks((prewTasks) => {
      console.log("inputTitle " + inputTitle, "inputDescibe" + inputDescribe
      )
      const updatedTasks = [...prewTasks];
      updatedTasks.unshift({title: inputTitle, description: inputDescribe, id: Math.random().toString() });
      return updatedTasks;
    });
  };



  // Przekaz zadanie do finish
  const deleteTaskHandlerFromCurrent = (taskId, text) => {
    console.log();
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      return updatedTasks;
    });
    setOldTasks((prewTasks) => {
      const updatedTasks = [...prewTasks];
      updatedTasks.unshift({ description: text, id: Math.random().toString() });
      return updatedTasks;
    });
  };

  //Przekaz zadania do Current
  // const deleteTaskHandlerFromFinish = (taskId, text) => {
  //   setOldTasks((prevTasks) => {
  //     const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
  //     return updatedTasks;
  //   });
  //   setTasks((prewTasks) => {
  //     const updatedTasks = [...prewTasks];
  //     updatedTasks.unshift({ description: text, id: Math.random().toString() });
  //     return updatedTasks;
  //   });
  // };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };



  return (
    <React.Fragment>
      {/* Header */}
      <Header onShowAddNewTaskHandler = {showAddNewTaskHandler} 
      isVisibleTaskHandler = {isVisibleTaskHandler}/>

      {/* New task  */}
      {isVisibleTaskHandler 
      &&  
      <NewTask onAddTask={addTaskHandler}
      onshowAddNewTaskHandler= {showAddNewTaskHandler} 
      isVisibleTaskHandler = {isVisibleTaskHandler}>
      </NewTask> }

     
      <CurrentTask
        tasks={tasks}
        onDeleteTaskHandler={deleteTaskHandlerFromCurrent}
      ></CurrentTask>
      
      <div>
        <button onClick={toggleVisibility} className={styles.show_btm}>
          Show finished tasks
        </button>
        {isVisible && (
          <FinishTask
            tasks={oldTasks}
          ></FinishTask>
        )}
      </div>
    </React.Fragment>
  );
}
export default Tasks;
