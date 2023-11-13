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
      <br></br>
      {/* Display ToDos */}

      { toDo && toDo.length ? '' : 'No Task...' }
      { toDo && toDo
      .map((task, index) => {
        return (
          <React.Fragment key={task.id}>

            <div className="col taskBg">
              <div className={task.status ?  'done' : ''}>
                <span className = "taskNum">{index + 1} </span>
                <span className = "taskText">{task.title}</span>
              </div>
              <div className='iconsWrap'>
                <span>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faPen} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
              </div>
            </div>

            
          </React.Fragment>
        )
      })
       }


    </div>
  );
}

export default App;
