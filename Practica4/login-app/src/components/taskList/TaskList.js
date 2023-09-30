import React, { useState } from "react";
import TaskForm from "../taskForm/TaskForm";

const TaskList = ({ tasks, setTasks }) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const markAsCompleted = (taskId) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      setCompletedTasks([...completedTasks, task]);
      setTasks(tasks.filter((t) => t.id !== taskId));
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
    setCompletedTasks(completedTasks.filter((t) => t.id !== taskId));
  };

  return (
    <div>
      <TaskForm onAddTask={addTask} />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => markAsCompleted(task.id)}>Completar</button>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Tareas Completadas</h3>
      <ul>
        {completedTasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
