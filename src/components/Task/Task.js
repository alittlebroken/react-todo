// Standard react imports
import React from 'react';

// Styling imports
import './Task.css';

// Task.js function component
function Task(props){

  // Extract out the required properties we need
  const task = props.task;

  // Render our task to the screen
  return (
    <div>
      <h3 id="1">{task.name}</h3>
    </div>
  );

}

// Exports
export default Task;
