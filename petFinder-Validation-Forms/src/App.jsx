import { useForm } from "react-hook-form";
import { useRef } from "react"; 
import { useState } from "react";



function App() {
  

  const [showPassword, setShowPassword] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      birthDate: "", 
      password: "",
      confirmPassword: "", 
      country: "mx",
      file: "",
      agreeTerms: false,
      petname: "",
      specie: "",
      breed: "",
      color: "",
      petAgeYears: "",
      petAgeMonths: "",
      petPictures: null,
      generalFeatures: "",
    },
  }); 

  const password = useRef(null);
  password.current = watch("password", ""); 

  const onSubmit = handleSubmit((data) => {
    console.log("formulario Enviado");
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <h2>Registro de Usuario</h2>

      {/* Owner Name */}
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          placeholder="nombre"
          {...register("name", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            maxLength: {
              value: 20,
              message: "Nombre no debe ser mayor a 20 caracteres",
            },
            minLength: {
              value: 2,
              message: "Nombre debe ser mayor a 2 caracteres",
            },
          })}
        />
        {errors.name?.type && <span>{errors.name.message}</span>}
      </div>

      {/* Owner Age */}
      <div>
        <label>Fecha de Nacimiento:</label>
        <input
          type="date"
          name="birthDate"
          {...register("birthDate", {
            required: "Fecha de nacimiento es requerida",
            validate: (value) => {
              const birthDate = new Date(value);
              const actualDate = new Date();
              const edad =
                actualDate.getFullYear() - birthDate.getFullYear();
              return edad >= 18 || "Debes ser mayor de edad";
            },
          })}
        />
        {errors.birthDate && <span>{errors.birthDate.message}</span>}
      </div>

      {/* Owner email */}
      
      <div>
        <label>Correo Electrónico:</label>
        <input
          type="email"
          name="emailUser"
          {...register("emailUser", {
            required: {
              value: true,
              message: "Correo es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Correo no válido",
            },
          })}
        />
        {errors.emailUser && <span>{errors.emailUser.message}</span>}
      </div>

       {/* Owner password */}
       <div>
        <label>Contraseña:</label>
        <input
          type={showPassword ? "text" : "password"}
          name="passwordUser"
          placeholder="contraseña"
          {...register("passwordUser", {
            required: {
              value: true,
              message: "Contraseña es requerida",
            },
            minLength: {
              value: 6,
              message: "Contraseña debe ser mayor a 6 caracteres",
            },
          })}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Ocultar" : "Mostrar"}
        </button>
        {errors.passwordUser && <span>{errors.passwordUser.message}</span>}
      </div>

      {/* Confirm password */}
      <div>
        <label>Confirma Contraseña:</label>
        <input
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirmar contraseña es requerida",
            },
            minLength: {
              value: 6,
              message: "Confirmar contraseña debe ser mayor a 6 caracteres",
            },
            validate: (value) =>
              value === password.current ||
              "Las contraseñas no coinciden",
          })}
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
      </div>

      {/* Owner Picture */}
      <div>
        <label htmlFor="pictureProfile">Subir Foto Usuario:</label>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;


            if (file && allowedExtensions.test(file.name)) {
              setValue("pictureProfile", file.name);
            } else {

              setValue("pictureProfile", "");
              alert("Por favor, seleccione un archivo de imagen con una extensión válida (jpg, jpeg, png, gif).");
            }
          }}
        />
        {errors.pictureProfile && (
          <span>{errors.pictureProfile.message}</span>
        )}
      </div>



      <div>
        <label>País:</label>
        <select
          name="country"
          {...register("country", {
            required: "Seleccione su país",
            validate: (value) => (value === "mx" || value === "otro") || "Solo se admiten usuarios de México o seleccione 'Otro país'",
          })}
        >
          <option value="" disabled selected>
            Seleccionar país
          </option>
          <option value="mx">México</option>
          <option value="otro">Otro país</option>
         
        </select>
        {errors.country && <span>{errors.country.message}</span>}
      </div>

      {watch("country") === "mx" && (
        <div>
          <label>Estado:</label>
          <select
            name="state"
            {...register("state", {
              required: "Seleccione su estado",
            })}
          >
            <option value="" disabled selected>
              Seleccionar estado
            </option>
            <option value="aguascalientes">Aguascalientes</option>
            <option value="bajacalifornia">Baja California</option>
            <option value="bajacaliforniasur">Baja California Sur</option>
            <option value="campeche">Campeche</option>
            <option value="chiapas">Chiapas</option>
            <option value="chihuahua">Chihuahua</option>
            <option value="coahuila">Coahuila</option>
            <option value="colima">Colima</option>
            <option value="cdmx">Ciudad de México</option>
            <option value="durango">Durango</option>
            <option value="guanajuato">Guanajuato</option>
            <option value="guerrero">Guerrero</option>
            <option value="hidalgo">Hidalgo</option>
            <option value="jalisco">Jalisco</option>
            <option value="mexico">Estado de México</option>
            <option value="mic">Michoacán</option>
            <option value="mor">Morelos</option>
            <option value="nayarit">Nayarit</option>
            <option value="nuevoleon">Nuevo León</option>
            <option value="oaxaca">Oaxaca</option>
            <option value="puebla">Puebla</option>
            <option value="queretaro">Querétaro</option>
            <option value="quintanaroo">Quintana Roo</option>
            <option value="sanluispotosi">San Luis Potosí</option>
            <option value="sinaloa">Sinaloa</option>
            <option value="sonora">Sonora</option>
            <option value="tabasco">Tabasco</option>
            <option value="tamaulipas">Tamaulipas</option>
            <option value="tlaxcala">Tlaxcala</option>
            <option value="veracruz">Veracruz</option>
            <option value="yucatan">Yucatán</option>
            <option value="zacatecas">Zacatecas</option>
          </select>
          {errors.state && <span>{errors.state.message}</span>}
        </div>
      )}

      {watch("country") === "otro" && (
        <div>
          <label>País de origen:</label>
          <input
            type="text"
            name="originCountry"
            {...register("originCountry", {
              required: "Ingrese su país de origen",
            })}
          />
          {errors.originCountry && <span>{errors.originCountry.message}</span>}
          <p>
            PetFinder actualmente solo está disponible en México.
            Puede continuar con el registro para apoyar la búsqueda de mascotas perdidas.
          </p>
        </div>
      )}
      <br />

      <label>Acepto los términos y condiciones</label>
      {/* Terms and Conditions */}
      <div>
        <input
          type="checkbox"
          name="terms"
          {...register("terms", {
            required: "Acepta los términos y condiciones",
          })}
        />

        {errors.terms && <span>{errors.terms.message}</span>}
      </div>

      <button type="submit">Enviar</button>



      <h2>Inicio de Sesión </h2>

      {/* Email */}
      <div>
        <label>Correo Electrónico:</label>
        <input
          type="email"
          {...register("email", {
            required: "Correo es requerido",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Correo no válido",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      {/* Password */}
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          {...register("password", {
            required: "Contraseña es requerida",
            minLength: {
              value: 6,
              message: "Contraseña debe tener al menos 6 caracteres",
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit">Iniciar Sesión</button>

      <h2>Registro de la Mascota de:{watch("name")}</h2>

      {/* Pet Name */}
      <div>
        <label>Nombre de la Mascota:</label>
        <input
          type="text"
          name="petname"
          placeholder="nombre"
          {...register("petname", {
            required: {
              value: true,
              message: "Nombre de la mascota es requerido",
            },
            maxLength: {
              value: 20,
              message: "Nombre no debe ser mayor a 20 caracteres",
            },
            minLength: {
              value: 2,
              message: "Nombre debe ser mayor a 2 caracteres",
            },
          })}
        />
        {errors.petname?.message && <span>{errors.petname.message}</span>}
      </div>

      {/* Pet Species */}
      <div>
        <label>Especie:</label>
        <input
          type="text"
          name="specie"
          placeholder="especie"
          {...register("specie", {
            required: {
              value: true,
              message: "Especie de la mascota es requerida",
            },
          })}
        />
        {errors.specie?.message && <span>{errors.specie.message}</span>}
      </div>

      {/* Pet Breed */}
      <div>
        <label>Raza:</label>
        <input
          type="text"
          name="breed"
          placeholder="raza"
          {...register("breed", {
            required: {
              value: true,
              message: "Raza de la mascota es requerida",
            },
          })}
        />
        {errors.breed?.message && <span>{errors.breed.message}</span>}
      </div>

      {/* Pet Color */}
      <div>
        <label>Color:</label>
        <input
          type="text"
          name="color"
          placeholder="color"
          {...register("color", {
            required: {
              value: true,
              message: "Color de la mascota es requerido",
            },
          })}
        />
        {errors.color?.message && <span>{errors.color.message}</span>}
      </div>

      {/* Pet Age */}
      <div>
        <label>Edad de la Mascota:</label>
        <div>
          <select
            name="petAgeYears"
            {...register("petAgeYears", {
              required: "Seleccione la edad de la mascota",
            })}
          >
            <option value="" disabled selected>
              Seleccionar años
            </option>
            {[...Array(20).keys()].map((year) => (
              <option key={year} value={year}>
                {year} {year === 1 ? 'año' : 'años'}
              </option>
            ))}
          </select>

          <select
            name="petAgeMonths"
            {...register("petAgeMonths", {
              required: "Seleccione la edad de la mascota",
            })}
          >
            <option value="" disabled selected>
              Seleccionar meses
            </option>
            {[...Array(12).keys()].map((month) => (
              <option key={month} value={month}>
                {month} {month === 1 ? 'mes' : 'meses'}
              </option>
            ))}
          </select>
        </div>
        {errors.petAgeYears && <span>{errors.petAgeYears.message}</span>}
        {errors.petAgeMonths && <span>{errors.petAgeMonths.message}</span>}
      </div>

      {/* Pet Pictures */}
      <div>
        <label htmlFor="petPictures">Subir Fotos de la Mascota:</label>
        <input
          type="file"
          name="petPictures"
          onChange={(e) => {
            const files = e.target.files;
            const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
            let isValid = true;

            for (const file of files) {
              if (!allowedExtensions.test(file.name)) {
                isValid = false;
                alert(`El archivo ${file.name} tiene una extensión no válida. Por favor, seleccione archivos de imagen con extensiones válidas (jpg, jpeg, png, gif).`);
                break;
              }
            }

            if (isValid) {
             
              setValue("petPictures", files);
            } else {
              setValue("petPictures", null);
            }
          }}
          multiple
        />
        {errors.petPictures && <span>{errors.petPictures.message}</span>}

      </div>
      {/* General Features */}
      <div>
        <label>Señas Generales de la Mascota:</label>
        <textarea
          name="generalFeatures"
          placeholder="Señas particulares de la mascota..."
          {...register("generalFeatures", {
            required: {
              value: true,
              message: "Señas generales de la mascota son requeridas",
            },
            maxLength: {
              value: 200,
              message: "Señas generales no deben exceder los 200 caracteres",
            },
          })}
        />
        {errors.generalFeatures?.message && (
          <span>{errors.generalFeatures.message}</span>
        )}

        <button type="submit">Enviar</button>

      </div>



      <h2>Realizar Reporte</h2>

{/* Report Type */}
<div>
  <label>Tipo de Reporte (Encontrado/Perdido):</label>
  <select
    name="reportType"
    {...register("reportType", {
      required: "Tipo de reporte es requerido",
    })}
  >
    <option value="" disabled selected>
      Seleccionar tipo de reporte
    </option>
    <option value="encontrado">Encontrado</option>
    <option value="perdido">Perdido</option>
  </select>
  {errors.reportType && <span>{errors.reportType.message}</span>}
</div>

{watch("reportType") === "perdido" && (
  // Lost Pets Section
  <>
    {/* Lost dates */}
    <div>
      <label>Fecha de avistamiento:</label>
      <input
        type="date"
        name="petLoseDate"
        {...register("petLoseDate", {
          required: "Fecha de extravío es requerida",
          validate: (value) => {
            const petLoseDate = new Date(value);
            const actualDate = new Date();

            return (
              petLoseDate <= actualDate ||
              "La fecha de extravío debe ser anterior o igual a la fecha actual"
            );
          },
        })}
      />
      {errors.petLoseDate && <span>{errors.petLoseDate.message}</span>}
    </div>

    {/* Zone of Loss */}
    <div>
      <label>Zona de Avistamiento:</label>
      <input
        type="text"
        name="petLoseZone"
        placeholder="Ej. Calle, Colonia, Ciudad"
        {...register("petLoseZone", {
          required: "Zona de extravío es requerida",
        })}
      />
      {errors.petLoseZone && <span>{errors.petLoseZone.message}</span>}
    </div>

    
  </>
)}

{watch("reportType") === "encontrado" && (
  // Found pet Section
  <>
    {/* Found dates */}
    <div>
      <label>Fecha de avistamiento:</label>
      <input
        type="date"
        name="petFoundDate"
        {...register("petFoundDate", {
          required: "Fecha de avistamiento es requerida",
        })}
      />
      {errors.petFoundDate && <span>{errors.petFoundDate.message}</span>}
    </div>

    {/* Found Zone */}
    <div>
      <label>Zona de Avistamiento:</label>
      <input
        type="text"
        name="petFoundZone"
        placeholder="Ej. Calle, Colonia, Ciudad"
        {...register("petFoundZone", {
          required: "Zona de avistamiento es requerida",
        })}
      />
      {errors.petFoundZone && <span>{errors.petFoundZone.message}</span>}
    </div>

    {/* Found Pictures */}
    <div>
      <label htmlFor="petFoundPictures">Subir Fotos de la Mascota Encontrada:</label>
      <input
        type="file"
        name="petFoundPictures"
        onChange={(e) => {
          
        }}
        multiple
      />
      {errors.petFoundPictures && (
        <span>{errors.petFoundPictures.message}</span>
      )}
    </div>

    {/* General Features */}
    <div>
      <label>Señas Particulares de la Mascota:</label>
      <textarea
        name="foundPetFeatures"
        placeholder="Señas particulares de la mascota..."
        {...register("foundPetFeatures", {
          required: {
            value: true,
            message: "Señas particulares de la mascota son requeridas",
          },
          maxLength: {
            value: 200,
            message: "Señas particulares no deben exceder los 200 caracteres",
          },
        })}
      />
      {errors.foundPetFeatures?.message && (
        <span>{errors.foundPetFeatures.message}</span>
      )}
    </div>

    
  </>
)}

<button type="submit">Enviar</button>

      <pre style={{ width: "400px" }}>
        {JSON.stringify(watch(), null, 2)}
      </pre>


     



    </form>
  );
}

export default App;
