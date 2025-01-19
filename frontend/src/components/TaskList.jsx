import React from "react";

function TaskList({ tasks, deleteTask, updateTask }) {
    const taskArray = tasks || [];
  return (
    <ul className="list-disc pl-5">
      {taskArray.map((task) => (
        <li key={task.id} className="flex items-center justify-between mb-2">
          <span className={task.completed ? "line-through" : ""}>
            {task.name}
          </span>
          <div>
            <button
              onClick={() =>
                updateTask(task.id, { ...task, completed: !task.completed })
              }
              className={`px-4 py-1 mr-2 ${
                task.completed ? "bg-gray-500" : "bg-green-500"
              } text-white`}
            >
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 text-white px-4 py-1"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
