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
      name: 'Create a react todo app'
    },
    {
      id: 2,
      name: 'Take out the trash'
    },
    {
      id: 3,
      name: 'Pick Son up from nursery'
    },
    {
      id: 4,
      name: 'Find a new place to live'
    }
  ]);

  // Remove a task from the list
  const removeTask = (task) => {
    setTasks((prev) => {
      return prev.filter(taskItem => taskItem.id !== task.id);
    });
  };

  // Add a task to the list
  const addTask = (task) => {
    setTasks((prev) => {
      return [{
        id: 90001,
        name: task
      }, ...prev];
    });
  };

  return (
    <div className="App">
      <TaskBar onAdd={addTask} />
      <TaskList
        tasks={tasks}
        onRemove={removeTask} />
    </div>
  );
}

export default App;
