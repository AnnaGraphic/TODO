import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTask] = useState([]);

  function addTask(taskTitle) {
    setTask([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ]);
  }

  return (
    <>
      <Header onAddTask={addTask}/>
      <Tasks
        tasks={tasks}
      />

    </>
  )
}

export default App
