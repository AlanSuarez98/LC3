import "./App.css";
import Login from "./components/login/Login";
import TaskList from "./components/taskList/TaskList";
import React, { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h1>Lista de Tareas</h1>
          <button onClick={handleLogout}>Cerrar sesión</button>
          <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
