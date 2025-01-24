import React from "react";
import Tasks from "./Components/Tasks/Tasks/Tasks";
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.mainBlock}>
      <Tasks></Tasks>
    </div>
  );
}
export default App;
