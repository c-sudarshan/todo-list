import React, { useState, useRef, useEffect } from "react";

function TodoInput({ addTask }) {

  const [task, setTask] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAdd = () => {

    if (task.trim() === "") return;

    addTask(task);
    setTask("");
    inputRef.current.focus();
  };

  return (
    <div>

      <input
        ref={inputRef}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={handleAdd}>Add</button>

    </div>
  );
}

export default TodoInput;