import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ToDo = ({ toDo, taskComleted, setUpdateData, deleteTask }) => {
    return(
        <>
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
        </>
    )
}

export default ToDo;