function App() {
  return (
    <form>
      {/*name*/}
      <label htmlFor="name">Nombre</label>
      <input type="text" placeholder="nombre" />

      {/*email*/}
      <label htmlFor="correo">Correo</label>
      <input type="email" placeholder="e-mail"/>

      {/*password*/}
      <label htmlFor="password">Contraseña</label>
      <input type="password" placeholder="contraseña"/>

      {/*email*/}
      <label htmlFor="confirm_password">Confirmar Contraseña</label>
      <input type="password" placeholder="password" />

      {/*Birth Date */}
     
      <label htmlFor="birth-Date">Fecha de Nacimiento</label>
      <input type="date" />

      <label htmlFor="Pais">País</label>

      <select>
        <option value="mx">México</option>
        <option value="co">Colombia</option>
        <option value="ar">Argentina</option>
      </select>

      {/*files */}
      <label htmlFor="file">Foto de Perfil</label>
      <input type="file" />
      {/*terms and Conditions*/}
      <label htmlFor="terms">Acepto términos y condiciones</label>
      <input type="checkbox" name="" id="" />
      <button>Enviar</button>
    
    
    </form>
    
  )
}
export default App 