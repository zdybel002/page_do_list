import React, { useState } from "react";

import NewTask from "../NewTask/NewTask";
import CurrentTask from "../CurrentTask/CurrentTask";
import FinishTask from "../FinishTask/FinishTask";

import styles from "./Tasks.module.css";

function Tasks() {
  // Stany Aktualnych zadań
  const [tasks, setTasks] = useState([
    { text: "Создание курса - 1 час", id: "t1" },
    { text: "Разминка 15 мин", id: "t2" },
    { text: "Создание курса - 1 час", id: "t3" },
  ]);

  // Stany wykonach zadań
  const [oldTasks, setOldTasks] = useState([
    { text: "Написание статьи - 30 минут", id: "t12" },
    { text: "Перерыв - 10 минут", id: "t23" },
    { text: "Чтение книги - 1 час", id: "t31" },
  ]);

  // Dodanie nowego zadania
  const addTaskHandler = (inputText) => {
    setTasks((prewTasks) => {
      const updatedTasks = [...prewTasks];
      updatedTasks.unshift({ text: inputText, id: Math.random().toString() });
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
      updatedTasks.unshift({ text: text, id: Math.random().toString() });
      return updatedTasks;
    });
  };

  //Przekaz zadania do Current
  const deleteTaskHandlerFromFinish = (taskId, text) => {
    setOldTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      return updatedTasks;
    });
    setTasks((prewTasks) => {
      const updatedTasks = [...prewTasks];
      updatedTasks.unshift({ text: text, id: Math.random().toString() });
      return updatedTasks;
    });
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <React.Fragment>
      <h3>Dodaj nowe zadanei</h3>
      <NewTask onAddTask={addTaskHandler}></NewTask>
      <h3>Zadanie do wykonania</h3>
      <CurrentTask
        tasks={tasks}
        onDeleteTaskHandler={deleteTaskHandlerFromCurrent}
      ></CurrentTask>
      <div>
        <button onClick={toggleVisibility} className={styles.hiddenBtm}>
          Wykonane
        </button>
        {isVisible && (
          <FinishTask
            tasks={oldTasks}
            onDeleteTaskHandler={deleteTaskHandlerFromFinish}
          ></FinishTask>
        )}
      </div>
    </React.Fragment>
  );
}
export default Tasks;
