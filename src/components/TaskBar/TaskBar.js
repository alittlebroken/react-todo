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
    props.onAdd(taskName);
    setTaskName('');
  };

  return (
    <div>

        <input
          value={taskName}
          placeholder="Enter task name"
          onChange={handleChange} />

        <button onClick={handleClick}>Add</button>

    </div>
  );

}

export default TaskBar;
