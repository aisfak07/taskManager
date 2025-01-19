import React from 'react'

const DayButton = ({ day, isActive }) => {
    return (
      <button className={`day-button ${isActive ? 'active' : ''}`}>
        {day}
      </button>
    );
  };

  const TaskCategory = ({ title, tasks, onCheckChange }) => {
    return (
      <div className="task-category">
        <h3 className="category-title">{title}</h3>
        <TaskList tasks={tasks} onCheckChange={onCheckChange} />
      </div>
    );
  };
  

export default {DayButton, TaskCategory};
