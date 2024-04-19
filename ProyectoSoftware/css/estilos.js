/* Estilos generales */
body {
  background-color: #000;
  color: #fff;
  font-family: Arial, sans-serif;
}

/* Estilos del menú */
nav {
  background-color: #04324d;
  border-radius: 10px; 
  overflow: hidden;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav li {
  float: right;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 14px 16px;
  display: block;
  text-align: center;
}

nav a:hover {
  background-color: #111;
}

/* Estilos del Formulario */
.contenedor {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  background-color: #222;
  border-radius: 10px;
}

h2 {
  text-align: center;
}

.form-grupo {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  margin-top: 5px; 
}

input[type="text"],
input[type="email"],
input[type="password"],
button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #777;
 
}

button {
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

/* Estilos para el mensaje */
#mensaje {
  color: #f00; /* Rojo por defecto */
}