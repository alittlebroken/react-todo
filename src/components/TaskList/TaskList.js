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
      <div className="card-tasklist">
        <h2>{props.title}</h2>
        <p>
          There are currently no active tasks.
          Perhaps we should add one above.
        </p>
      </div>
    );
  }

  return (
    <div className="card-tasklist">
      <h2>{props.title}</h2>

      {taskList.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            onRemove={props.onRemove}
            onCloseTask={props.onCloseTask}
            onOpen={props.onOpen}
            onEnableUpdate={props.onEnableUpdate}
            onUpdate={props.onUpdate}
            />
        );
      })}
    </div>
  )
};

// Exports
export default TaskList;
