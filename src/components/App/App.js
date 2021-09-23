import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// Import custom compenents
import TaskBar from '../TaskBar/TaskBar';
import TaskList from '../TaskList/TaskList';

function App() {

  // Setup state for Tasks and Task List
  const [task, setTask] = useState({});
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Create a react todo app',
      status: 'open'
    },
    {
      id: 2,
      name: 'Take out the trash',
      status: 'open'
    },
    {
      id: 3,
      name: 'Pick Son up from nursery',
      status: 'open'
    },
    {
      id: 4,
      name: 'Find a new place to live',
      status: 'open'
    }
  ]);

  // Remove a task from the list
  const removeOpenTask = (task) => {
    setTasks((prev) => {
      return prev.filter(taskItem => taskItem.id !== task.id);
    });
  };

  const [closedTasks, setClosedTasks] = useState([]);

  /* Add a task to the closed task list and then remove it from the closed
     task list. */
  const closeTask = (task) => {
    // Add to the closed list
    setClosedTasks((prev) => {
      return [{
        id: task.id,
        name: task.name,
        status: 'closed'
      }, ...prev];
    });

    // Remove the task from the open task list
    removeOpenTask(task);

  };

  const removeClosedTask = (task) => {
    setClosedTasks((prev) => {
      return prev.filter(taskItem => taskItem.id !== task.id);
    });
  };

  /* Parent Remove Task function that calls in the function to remove the
     task from the correct list
  */
  const removeTask = (task) => {
    if(task.status === 'open'){
      removeOpenTask(task);
    } else {
      removeClosedTask(task);
    }
  };

  // Add a new open task to the list
  const addTask = (task) => {
    setTasks((prev) => {
      return [{
        id: 90001,
        name: task,
        status: 'open'
      }, ...prev];
    });

  };

  // reopen a closed task
  const reopenTask = (task) => {
    // Add the specified task to the open list and set status to open
    setTasks((prev) => {
      return [
        {
            id: task.id,
            name: task.name,
            status: 'open'
        }, ...prev];
    });

    // remove task from the closed list
    removeClosedTask(task);
  };

  return (
    <div className="App">

      <TaskBar onAdd={addTask} />

      <div className="ListContainer">

        <TaskList
          title="Open Tasks"
          tasks={tasks}
          onRemove={removeTask}
          onCloseTask={closeTask} />

        <TaskList
         title="Completed Tasks"
         tasks={closedTasks}
         onRemove={removeTask}
         onOpen={reopenTask} />

      </div>

    </div>
  );
}

export default App;
