import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Stats from "./components/Stats";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [xp, setXp] = useState(0);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    const savedXp = JSON.parse(localStorage.getItem("xp"));

    if (savedTasks) setTasks(savedTasks);
    if (savedXp) setXp(savedXp);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("xp", JSON.stringify(xp));
  }, [tasks, xp]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    const updated = tasks.map((task) => {
      if (task.id === id && !task.completed) {
        setXp((prev) => prev + 10);
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updated);
  };

  return (
    <div className="container">
      <h1>Gamified Task Manager</h1>
      <Stats xp={xp} />
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </div>
  );
}

export default App;