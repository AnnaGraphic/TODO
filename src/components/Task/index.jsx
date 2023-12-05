import styles from './task.module.css';
import { TbTrash } from 'react-icons/tb'

export function Task() {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius qui impedit debitis provident quas eos quam ducimus blanditiis aperiam neque.</p>
      <button className={styles.deleteButton}>
        <TbTrash size={18}/>
      </button>
    </div>
  )
}