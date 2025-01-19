import React, { useState } from "react";

function AddTask({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({ name: task }); // API expects a `name` property
      setTask(""); // Clear input
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Enter a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 mt-2"
      >
        Add Task
      </button>
    </form>
  );
}

export default AddTask;
