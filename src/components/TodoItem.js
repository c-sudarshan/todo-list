import React from "react";

function TodoItem({ task, index, deleteTask, toggleComplete }) {

  return (
    <li style={{ margin: "10px" }}>

      <span
        onClick={() => toggleComplete(index)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
          marginRight: "10px"
        }}
      >
        {task.text}
      </span>

      <button onClick={() => deleteTask(index)}>Delete</button>

    </li>
  );
}

export default TodoItem;