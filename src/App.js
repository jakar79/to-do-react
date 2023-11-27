import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function App() {

  //Task Stat
  const [toDo, setToDo] = useState([]);

  //Temp Stat
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');



  // Add Task
  const addTask = () => {
    if(newTask){
      let num = toDo.length +1;
      let newEntry = {id: num, title: newTask, status: false};
      setToDo([...toDo, newEntry]);
      setNewTask('');
    }
  };



  // Remove Tassk

  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id);
    setToDo(newTasks);
  };

  // Completed Task

  const taskComleted = (id) => {
    let newTask = toDo.map( task => {
      if (task.id === id ){
        return({ ...task, status: !task.status})
      }
      return task;
    });
    setToDo(newTask);
  };

  //Cancel Update Task

  const cancelUpdate = () => {
    setUpdateData('');
  };

  //Change Task for update

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  };

  // Update Task

  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData('');
  };


  return (
    <div className="container App">
      <br/><br/>
      <h2>To Do List App</h2>
      <br></br>

      {/* Update task */}
      {updateData && updateData ? (
        <>
        <div className='row'>
          <div className='col'>
            <input 
            value={ updateData && updateData.title}
            onChange={ (e) => changeTask(e)}
            className='form-control form-control-lg'/>
          </div>
          <div className='col-auto'>
            <button
              onClick={updateTask} 
              className='btn btn-lg btn-success mr-20'>Update
            </button>
            <button 
              onClick={cancelUpdate}
              className='btn btn-lg btn-warning'>Cancel
            </button>
          </div>
        </div>
        <br />
        </>
      ) : (
        <>
        {/* Add Task*/}
        <div className='row'>
          <div className='col'>
            <input 
              className='form-control form-control-lg' 
              value={newTask} 
              onChange={(e) => setNewTask(e.target.value)}  
            />
          </div>
          <div className='col-auto'>
            <button 
              className='btn btn-lg btn-success' 
              onClick={addTask}>Add Task
            </button>
          </div>
        </div>
        <br />
        </>
      )}
      
      

      
      {/* Display ToDos */}

      { toDo && toDo.length ? '' : 'No Task...' }

      { toDo && toDo
      .sort((a, b) => a.id > b.id ? 1 : -1)
      .map((task, index) => {
        return (
          <React.Fragment key={task.id}>

            <div className="col taskBg">
              
              <div className={task.status ?  'done' : ''}>
                <span className = "taskNum">{index + 1}</span>
                <span className = "taskText">{task.title}</span>
              </div>
              
              <div className='iconsWrap'>
                
                <span title='Completed / not Completed'
                  onClick={ (e)=> taskComleted(task.id)}>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>

                {task.status ? null :(
                  <span title='Edit'
                  onClick={ () => setUpdateData({
                    id: task.id,
                    title: task.title,
                    status: task.status ? true : false }) }>
                  <FontAwesomeIcon icon={faPen} />
                </span>
                )}
                
                

                <span title='Delete' 
                  onClick={()=> deleteTask(task.id) }>
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
