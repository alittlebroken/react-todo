// Standard react imports
import React from 'react';

// Styling imports
import './Task.css';

// Task.js function component
function Task(props){

  // Extract out the required properties we need
  const task = props.task;

  // Remove this track from the list
  const removeTrack = () => {
    props.onRemove(props.task);
  };

  // Close a task off
  const closeTask = () => {
    props.onCloseTask(props.task);
  };

  // reopen a task
  const openTask = () => {
    props.onOpen(task);
  };

  // Display actions
  const renderOpenCloseAction = () => {
    if(props.task.status === 'open'){
      return <button onClick={closeTask}>CLOSE</button>;
    } else {
      return <button onClick={openTask}>REOPEN</button>;
    }
  };

  // Render our task to the screen
  return (
    <div>
      <h3 id="1">
        {task.name}
        <button onClick={removeTrack}>REMOVE</button>
        {renderOpenCloseAction()}
      </h3>
    </div>
  );

}

// Exports
export default Task;
