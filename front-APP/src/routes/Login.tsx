import DefaultLayout from "../layout/DefaultLayout"
import Layoutencabezado from "../layout/Layoutencabezado";

export default function Login(){
    return (
   <Layoutencabezado>
    <form className="form">
        <h1>Login</h1>
        <label>Username</label>
        <input type="text"/>
        <label>Contraseña</label>
        <input type="password"/>
        <button>Iniciar Sesión</button>

    </form>
   </Layoutencabezado> 
    
    );
}