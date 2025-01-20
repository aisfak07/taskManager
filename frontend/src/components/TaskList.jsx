import React from "react";
import { LiaTrashAlt } from "react-icons/lia";

function TaskList({ tasks, deleteTask, updateTask }) {
    const taskArray = tasks || [];
  return (
    <ul className="w-full flex flex-col gap-4 px-5">
      {taskArray.map((task) => (
        <li className="px-5 py-3 rounded-lg bg-[#f3efee] flex items-center justify-between sm:text-base text-sm" key={task.id}>
            <label className="task-item flex items-center gap-3 bg-[#f3efee]">
                <input className="w-5 h-5 appearance-none checked:text-white checked:!bg-[#9F9F9F] bg-[#f3efee] border-[#9F9F9F] ring-2 ring-[#9f9f9f83] rounded-sm checked:ring-[#9F9F9F] checked:ring-2 checked:rounded-sm" type="checkbox" checked={task.is_completed} onChange={() => updateTask(task.id, { ...task, is_completed: !task.is_completed })} />
                <span className="bg-[#f3efee] font-medium">{task.title}</span>
            </label>
            <LiaTrashAlt className="bg-transparent text-2xl opacity-50" onClick={() => deleteTask(task.id)} />
            {/* <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 text-white px-4 py-1"
            >
              Delete
            </button> */}
        </li>
      ))}
    </ul>
    
  );
}

export default TaskList;
