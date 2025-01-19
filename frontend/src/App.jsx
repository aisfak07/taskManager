import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddList";

const API_URL = "https://taskmanager-mv8m.onrender.com/api/todos/";

function App() {
  const [tasks, setTasks] = useState([]); // State for tasks
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch all tasks from the API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(API_URL);
        setTasks(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  // Add a new task
  const addTask = async (task) => {
    try {
      const response = await axios.post(API_URL, task);
      setTasks([...tasks, response.data]); // Update task list
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Delete a task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}${id}/`);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Update a task
  const updateTask = async (id, updatedTask) => {
    try {
      const response = await axios.put(`${API_URL}${id}/`, updatedTask);
      setTasks(tasks.map((task) => (task.id === id ? response.data : task)));
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Task Manager</h1>
      <AddTask addTask={addTask} />
      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
      )}
    </div>
  );
}

export default App;
