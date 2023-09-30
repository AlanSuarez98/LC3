import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const inputUsername = e.target.value;
    setUsername(inputUsername);

    // Verificar si el nombre de usuario contiene la letra 'o' (mayúscula o minúscula)
    if (inputUsername.toLowerCase().includes("o")) {
      setMessage("Por favor, ¡Nombres de usuario sin la letra o!");
    } else {
      setMessage("");
    }
  };

  const handleRegister = () => {
    // Verificar si el nombre de usuario está vacío o contiene la letra 'o' (mayúscula o minúscula)
    if (username === "" || username.toLowerCase().includes("o")) {
      alert("Usuario inválido para registrarse");
    } else {
      alert("¡Usuario registrado correctamente!");
    }
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={handleInputChange}
      />
      <button onClick={handleRegister}>Registrarse</button>
      <p>{message}</p>
    </div>
  );
};

export default Login;
