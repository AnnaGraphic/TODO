import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "todo:savedTasks"; 

function App() {
  const [tasks, setTasks] = useState([]);

  //get items from local storage
  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    //console.log('saved ', localStorage, saved);
    if (saved) {
      setTasks(JSON.parse(saved))
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])

  // set items to local storage
  function setTasksAndSave(newTask) {
    setTasks(newTask);
    // 2nd parameter must be string
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTask));
  }

  function addTask(taskTitle) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ]);
  }

  function deleteTaskById(taskId) {
    const newTask = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTask)
  }

  function toggleTaskCompleteById(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    setTasksAndSave(newTasks)
  }

  return (
    <>
      <Header onAddTask={addTask}/>
      <Tasks
        tasks={tasks}
        onComplete={toggleTaskCompleteById}
        onDelete={deleteTaskById}
      />

    </>
  )
}

export default App
