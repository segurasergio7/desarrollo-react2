import React from 'react';
import '../styles/App.css'; 

const App = () => {
  return (
    <div className="login-container">
      <h1>Bienvenido a la biblioteca Municipal</h1>
      <h2>Inicie Sesión</h2>
      <form>
        <input type="text" placeholder="Usuario" minLength="4" />
        <input type="password" placeholder="Contraseña" minLength="8" />
        <input type="submit" value="Ingresar" />
      </form>
      <p>
        ¿Olvidaste tu contraseña?<br />
        <a href="#">Recupérala aquí</a>
      </p>
      <p>
        ¿No tienes una cuenta?<br />
        <a href="#">Creela aquí</a>
      </p>
    </div>
  );
};

export default App;
