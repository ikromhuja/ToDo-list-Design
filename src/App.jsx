import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };
  const music = new Audio("./add.mp3");
  music.play();

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-app-container">
      <h1 className="todo-title ">Create your ToDo list</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
        className="todo-input"
      />
      <button onClick={handleAddTask} className="todo-button">
        Add Task
      </button>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className="todo-item">
            {task}
            <button
              onClick={() => handleRemoveTask(index)}
              className="todo-delete-btn"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="default-list">
        {<li className="todo-item">Get IELTS</li>}
      </div>
      <div className="todo-footer">
        <p className="todo-footer-text">Created by </p>
        <p className="todo-footer-text">Yami-2009</p>
      </div>
    </div>
  );
}

export default ToDoList;
