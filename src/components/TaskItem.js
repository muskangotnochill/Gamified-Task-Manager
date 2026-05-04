import React from "react";

function TaskItem({ task, deleteTask, completeTask }) {
  return (
    <li className={task.completed ? "completed" : ""}>
      {task.text}
      <div>
        {!task.completed && (
          <button onClick={() => completeTask(task.id)}>
            Complete
          </button>
        )}
        <button onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;