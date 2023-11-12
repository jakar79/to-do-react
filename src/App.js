import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function App() {

  //Task Stat
  const [toDo, setToDo] = useState([
    {id:1, title: "Task1", status: false},
    {id:2, title: "Task2", status: false}
  ]);

  //Temp Stat
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // Add Task
  const addTask = () => {

  };

  // Delete Task

  const deleteTask = (id) => {
    
  };

  // Mark task completed

  const taskComleted = (id) => {
    
  };

  //Cancel Update

  const cancelUpdate = () => {
    
  };

  //Change Task for update

  const changeTask = (e) => {
    
  };

  // Update Task

  const updateTask = () => {
    
  };


  return (
    <div className="container App">
      <br/><br/>
      <h2>To Do List App</h2>

      {/* Display ToDos */}

      { toDo && toDo.length ? '' : 'No Task...' }


    </div>
  );
}

export default App;
