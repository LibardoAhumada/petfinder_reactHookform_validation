import { useForm } from "react-hook-form"

useForm
function App() {
  const {register, handleSubmit} = useForm()
  return (
    <form onSubmit={handleSubmit((data) => {
      console.log("formulario enviado")
      console.log(data)
    })}>
      {/*name*/}
      <label htmlFor="name">Nombre</label>
      <input 
      type="text" 
      placeholder="nombre"
      {...register("name")} 
      />

      {/*email*/}
      <label htmlFor="correo">Correo</label>
      <input type="email" 
      placeholder="e-mail"
      {...register("email")}     
      />

      {/*password*/}
      <label htmlFor="password">Contraseña</label>
      <input type="password" 
      placeholder="contraseña"
      {...register("password")} />

      {/*email*/}
      <label htmlFor="confirm_password">Confirmar Contraseña</label>
      <input type="password" 
      placeholder="confirmar contraseña" 
      {...register("confirm_password")} 
      />

      {/*Birth Date */}
     
      <label htmlFor="birth-Date">Fecha de Nacimiento</label>
      <input type="date" 
      {...register("birth-Date")} 
      />

      <label 
      htmlFor="country">País</label>


      <select 
      {...register("country")} >
        <option value="mx">México</option>
        <option value="co">Colombia</option>
        <option value="ar">Argentina</option>
      </select>

      {/*files */}
      <label htmlFor="picture_file">Foto de Perfil</label>
      <input 
      type="file" 
      {...register("picture_file")} 
      />
      
      {/*terms and Conditions*/}
      <label htmlFor="terms">Acepto términos y condiciones</label>
      <input 
      type="checkbox" 
      name="" 
      id="" 
      {...register("terms")} />
      <button
      type="submit">
      Enviar
      </button>
    
    
    </form>
    
  )
}
export default App 