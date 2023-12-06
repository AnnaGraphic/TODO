import styles from './tasks.module.css';
import { Task } from '../Task/index.jsx';

export function Tasks({ tasks }) {
  console.log('tasks2', tasks);
  return(
    <section className={styles.tasks} >
      <header className={styles.header}>
        <div>
          <p>create tasks</p>
          <span>10</span>
        </div>
        <div>
          <p>completed</p>
          <span>
            0 of 10
          </span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map(task => {
          return <Task key={task.id} task={task}/>
        })}
      </div>
    </section>
  )
}