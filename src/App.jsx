import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(taskTitle) {
    setTasks([
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
    setTasks(newTask)
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
    setTasks(newTasks)
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
