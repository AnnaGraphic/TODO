import styles from './tasks.module.css'
export function Tasks() {
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

      </div>
    </section>
  )
}