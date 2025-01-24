import React from "react";

function NewTask(props) {
  const inputRef = React.createRef();

  const handleButtonClick = () => {
    console.log(inputRef.current.value);
    props.onAddTask(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <React.Fragment>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Dodaj</button>
    </React.Fragment>
  );
}

export default NewTask;
