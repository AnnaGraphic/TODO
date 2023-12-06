import styles from './header.module.css';
import { useState } from 'react';
import ToDoLogo from '../../assets/Logo.svg';
import { AiOutlinePlusCircle } from "react-icons/ai";

export function Header({ onAddTask }) {
  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    // prevent refreshing bage by click
    event.preventDefault();
    console.log('title', title)
    onAddTask(title);
    // to clear input field
    setTitle('');
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
    console.log(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={ToDoLogo} />
      <form onSubmit={handleSubmit} className={styles.newTaskForm} >
        <input placeholder='add a new panda-task' type='text' value={title} onChange={onChangeTitle} />
        <button>create
          <AiOutlinePlusCircle size={18}/>
        </button>
      </form>
    </header>
  )
}