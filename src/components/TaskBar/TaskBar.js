import React, { useState } from 'react';
import './TaskBar.css';

function TaskBar(props){

  // Setup state for the component
  const [taskName, setTaskName] = useState('');

  // Lets update the task each time a change is detected in the input field
  const handleChange = ({target}) => {
    setTaskName(target.value);
  };

  // process the button click
  const handleClick = () => {
    // Don't add an empty task to the list
    if(!taskName){
      return;
    }

    props.onAdd(taskName);
    setTaskName('');
  };

  return (
    <div className="addTaskContainer">

        <input
          className="addTask"
          value={taskName}
          placeholder="Enter your task name"
          onChange={handleChange} />

        <button
          className="addTaskButton"
          onClick={handleClick}>
          Add
        </button>

    </div>
  );

}

export default TaskBar;
