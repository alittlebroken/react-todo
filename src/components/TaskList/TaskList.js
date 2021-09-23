import React from 'react';
import './TaskList.css';

// Custom component Imports
import Task from '../Task/Task';

// Main functional component
function TaskList(props){

  // Extract task list from props
  const taskList = props.tasks;

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
