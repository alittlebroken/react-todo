import React from 'react';
import './TaskList.css';

// Custom component Imports
import Task from '../Task/Task';

// Main functional component
function TaskList(props){

  // Extract task list from props
  const taskList = props.tasks;

  if(!taskList || taskList.length === 0){
    return (
      <div>
        <h2>Current Task List</h2>
        <p>
          There are currently no active tasks. Perhaps we should add one above.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2>Current Task List</h2>

      {taskList.map((task) => {
        return (
          <Task
            task={task}
            onRemove={props.onRemove}
            />
        );
      })}
    </div>
  )
};

// Exports
export default TaskList;
