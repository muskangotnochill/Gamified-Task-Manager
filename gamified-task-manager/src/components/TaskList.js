import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, completeTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;