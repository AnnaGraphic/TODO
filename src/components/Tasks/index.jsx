import styles from './tasks.module.css';
import { Task } from '../Task/index.jsx';

export function Tasks({ tasks, onComplete }) {
  const tasksQuantity = tasks.length;
  const tasksCompleted = tasks.filter(task => task.isCompleted).length;

  console.log('tasks2', tasks);
  return(
    <section className={styles.tasks} >
      <header className={styles.header}>
        <div>
          <p>create tasks</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p>completed</p>
          <span>
            {tasksCompleted} of {tasksQuantity}
          </span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map(task => {
          return <Task key={task.id} task={task} onComplete={onComplete}/>
        })}
      </div>
    </section>
  )
}