import { useState } from 'react';


function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  
  const registeredUsers = [
    {
      emailUser: 'usuario@gmail.com',
      passwordUser: 'contraseña123',
    },
    
  ];

  const handleLogin = () => {
    const { email, password } = loginData;

   
    const user = registeredUsers.find((user) => user.emailUser === email);

    if (user) {
      
      if (user.passwordUser === password) {
        alert('Inicio de sesión exitoso');
        
      } else {
        alert('La contraseña no es correcta');
      }
    } else {
      alert('El correo electrónico no está registrado');
    }
  };

  return (
    <div>
      <h2>Inicio de Sesión</h2>
      {/* Email */}
      <div>
        <label>Correo Electrónico:</label>
        <input
          type="email"
          value={loginData.email}
          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
        />
      </div>

      {/* Password */}
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
        />
      </div>

      <button type="button" onClick={handleLogin}>
        Iniciar Sesión
      </button>
    </div>
  );
}

export default LoginForm;
