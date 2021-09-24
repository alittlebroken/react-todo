// Standard react imports
import React, { useState, useEffect } from 'react';

// Styling imports
import './Task.css';

// Task.js function component
function Task(props){

  // extract out the individual elements
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [status, setStatus] = useState();
  const [editMode, setEditMode] = useState();

  useEffect(() => {
    setId(props.task.id);
    setName(props.task.name);
    setStatus(props.task.status);
    setEditMode(props.task.edit);
  },[props.task.id,props.task.name,props.task.status,props.task.edit]);


  // Remove this track from the list
  const removeTrack = () => {
    props.onRemove({
      id: id,
      name: name,
      status: status,
      edit: editMode,
    });
  };

  // Close a task off
  const closeTask = () => {
    props.onCloseTask({
      id: id,
      name: name,
      status: status,
      edit: editMode,
    });
  };

  // reopen a task
  const openTask = () => {
    props.onOpen({
      id: id,
      name: name,
      status: status,
      edit: editMode,
    });
  };

  // enable a task for editing
  const enableEdit = () => {
    props.onEnableUpdate({
      id: id,
      name: name,
      status: status,
      edit: editMode,
    });
  }

  // Display actions
  const renderOpenCloseAction = () => {
    if(status === 'open'){
      return <button onClick={closeTask}>CLOSE</button>;
    } else {
      return <button onClick={openTask}>REOPEN</button>;
    }
  };

  // Do we display the Edit button
  const renderEditAction = () => {
    if(editMode === 'yes' && status === 'open'){
      return <button onClick={updateTask} >SAVE</button>;
    } else if (editMode === 'no' && status === 'open') {
      return <button onClick={enableEdit}>EDIT</button>;
    }
  };

  // Update the task
  const updateTask = () => {

    // create a new task to pass back
    const newTask = {
      id: id,
      name: name,
      status: status,
      edit: 'no'
    };

    props.onUpdate(newTask);

  };

  // Display the renderUpdateField
  const renderUpdate = () => {

    if(editMode === 'yes'){
      return <input name="name" value={name}  onChange={handleChange} />;
    } else {
      return <div>{name}</div>;
    }
  };

  const handleChange = ({target}) => {
    // create a new task to pass back
    setName(target.value);
  };

  // Render our task to the screen
  return (

      <div className="taskContainer">
        {renderUpdate()}
        <button onClick={removeTrack}>REMOVE</button>
        {renderOpenCloseAction()}
        {renderEditAction()}
      </div>

  );

}

// Exports
export default Task;
