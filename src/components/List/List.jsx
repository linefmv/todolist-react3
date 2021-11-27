import './list.styles.css'
import { FiPlus } from 'react-icons/fi'

const List = () => {
    return (
     <>
    <section className="list">
        <header>
            <h2>To do</h2>
            <div className='input container'> 
                <input type='text' 
                    placeholder='Add new task'
                    OnChange={(e) => console.log(e.target.value)} />
                <button 
                type='submit'
                className='add-task' 
                data-testid='add-task'>
                 <FiPlus size={16} color='#fff'/> 
            </button>
             </div>
         </header>
    </section>
     </>
    )
}

export default List