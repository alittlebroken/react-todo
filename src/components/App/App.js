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

  return (
    <div className="App">
      <TaskBar />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
