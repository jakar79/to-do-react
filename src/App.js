import { useState } from 'react';

import AddToDoForm from './components/AddToDoForm';
import UpdateForm from './components/UpdateForm';
import ToDo from './components/ToDo';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


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
        <UpdateForm 
        updateData = {updateData}
        changeTask = {changeTask}
        updateTask = {updateTask}
        cancelUpdate = {cancelUpdate}
        />
      ) : (
        <AddToDoForm 
          newTask = {newTask}
          setNewTask = { setNewTask}
           addTask = { addTask} 
        />
      )}
      
      
      {/* Display ToDos */}

      { toDo && toDo.length ? '' : 'No Task...' }

        <ToDo 
          toDo = {toDo}
          taskComleted = {taskComleted}
          setUpdateData = {setUpdateData} 
          deleteTask = {deleteTask}
        />

    </div>
  );
}

export default App;
