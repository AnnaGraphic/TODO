import styles from './header.module.css';
import ToDoLogo from '../../assets/Logo.svg';
import { AiOutlinePlusCircle } from "react-icons/ai";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ToDoLogo} />
      <form className={styles.newTaskForm} >
        <input placeholder='add a new panda-task' type='text'></input>
        <button>create
          <AiOutlinePlusCircle />
        </button>
      </form>
    </header>
  )
}