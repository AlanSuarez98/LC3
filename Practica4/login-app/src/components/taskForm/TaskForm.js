import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
      if (taskText.trim() !== '') {
        const newTask = {
          id: new Date().getTime(),
          text: taskText,
        };
        onAddTask(newTask);
        setTaskText('');
      }
    };
  
    return (
      <div>
        <h3>Agregar Nueva Tarea</h3>
        <input
          type="text"
          placeholder="Tarea"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={handleAddTask}>Agregar</button>
      </div>
    );
  }

export default TaskForm;
