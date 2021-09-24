import './App.css';
import React, { useState } from 'react';

// Import custom compenents
import TaskBar from '../TaskBar/TaskBar';
import TaskList from '../TaskList/TaskList';
import generateID from '../../utils/ids';

function App() {

  // Setup state for Tasks and Task List

  const [tasks, setTasks] = useState([]);

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
        status: 'closed',
        edit: 'no'
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
  const addTask = (task, index) => {
    setTasks((prev) => {
      return [{
        id: generateID(),
        name: task,
        status: 'open',
        edit: 'no'
      }, ...prev];
    });

  };

  // Enable update for task
  const enableTaskUpdate = (task) => {

    if(!task.status === 'open'){
      // Do nothing if the task is closed
      return;
    } else {
      // Create a new task with edit set to yes

      const newTask = {
        id: task.id,
        name: task.name,
        status: task.status,
        edit: 'yes'
      };

      // remove the old task from the list
      removeTask(task);

      // Now add the task enabled for editing
      setTasks((prev) => { return [ newTask, ...prev]; });

    };

  }

  // Update a task
  const updateTask = (task) => {

    // remove the task
    removeTask(task);

    // add it back in
    setTasks((prev) => { return [ task, ...prev]; });

  };

  // reopen a closed task
  const reopenTask = (task) => {
    // Add the specified task to the open list and set status to open
    setTasks((prev) => {
      return [
        {
            id: task.id,
            name: task.name,
            status: 'open',
            edit: 'no'
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
          onCloseTask={closeTask}
          onEnableUpdate={enableTaskUpdate}
          onUpdate={updateTask} />

        <TaskList
         title="Completed Tasks"
         tasks={closedTasks}
         onRemove={removeTask}
         onOpen={reopenTask} />

      </div>

      <div className="issues">
        <h2>Current Issues</h2>

        <p>
          <button>&#128369;</button>
          <strike>
            New tasks all have the same ID.
          </strike>
        </p>

        <p>
          <button>&#128369;</button>
          When you close or refresh the browser you lose all tasks you entered.
        </p>

        <p>
          <button>&#128369;</button>
          <strike>
            After a first edit all subsequent edits take the name from
            the first edit.
          </strike>
        </p>

        <p>
          <button>&#128369;</button>
          <strike>
            If editing more than one task name at a time, and you click save only
            the task whose Save button was ticked has the changes saved.
          </strike>
        </p>

        <p>
          <button>&#128369;</button>
          If you close a task whilst in edit mode and start making changes but
          then close the task, then the name of the task in the completed list
          has the edited name and not the original name.
        </p>

        <p>
          <button>&#128369;</button>
          <strike>
            If you are editing an open task and then reopen an old task then the
            task being edited loses any changes you made, but it remains in edit
            mode.
          </strike>
        </p>

      </div>

    </div>
  );
}

export default App;
