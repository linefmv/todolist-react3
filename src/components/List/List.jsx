import { useState } from 'react'
import { FiPlus, FiTrash2 } from 'react-icons/fi'
import './list.styles.css'

const List = () => {
  const [list, setList] = useState([])
  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask() {
    const task = {
      id: Math.random(),
      title: newTask,
      isComplete: false
    }

    if(task.title === '') {
      return
    }

    setList([...list, task])
    setNewTask('')
  }

  function handleRemoveTask(id) {
    const tasksFiltered = list.filter(task => task.id !== id)
    setList(tasksFiltered)
  }

  function handleToggleTaskCompleted (id) {
    const newTask = list.map(task => (task.id === id) ? 
    {...task, 
      isComplete: !task.isComplete
    } : task)

  setList(newTask)
  }


  return(
    <>
     <section className='list'>
      <header>
        <h2>To do list</h2>
        <div className='input-container'>
          <input 
            type='text'
            placeholder='add new a task'
            onChange={(e) => {setNewTask(e.target.value)}}
            value={newTask}
          />
          <button 
            type='submit' 
            className='add-task' 
            data-testid='add-task'
            onClick={handleCreateNewTask}
          >
           <FiPlus size={16} color='#fff'/> 
          </button>
        </div>
      </header>

      <main>
        <ul>
          {list.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompleted(task.id)}
                    readOnly
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>
              <button 
                className="remove-task"
                type="button" 
                data-testid="remove-task" 
                onClick={() => handleRemoveTask(task.id)}
              >
                <FiTrash2 size={16}/>
              </button>
            </li>  
          ))}
          
        </ul>
      </main>

    </section> 
    </>
  )
}

export default List