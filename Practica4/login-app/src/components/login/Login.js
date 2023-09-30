import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    // Aquí puedes agregar lógica de autenticación si es necesario
    if (username.trim() !== "") {
      onLogin();
    } else {
      alert("Por favor, ingrese un nombre de usuario válido.");
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <input
        type="text"
        placeholder="Nombre de Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default Login;
