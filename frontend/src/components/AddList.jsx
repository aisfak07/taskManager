import React, { useState } from "react";

function AddTask({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({ title: task }); // API expects a `name` property
      setTask(""); // Clear input
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full py-3 bg-[#f9f5f4] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
    <form onSubmit={handleSubmit} className="lg:w-[800px] w-full py-3 px-5 flex items-center bg-[#f9f5f4] gap-3 mx-auto">
      <input
        type="text"
        className="border py-2 px-5 w-full bg-[#f3efee] rounded-md placeholder:text-[#222222]"
        placeholder="Enter a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      {/* <textarea type="text" value={} id=""></textarea> */}
      <button
        type="submit"
        className="bg-[#393433] text-white w-40 px-4 py-2"
      >
        Add Task
      </button>
    </form>
    </div>
  );
}
export default AddTask;
