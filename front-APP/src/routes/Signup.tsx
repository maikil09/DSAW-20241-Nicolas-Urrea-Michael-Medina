import DefaultLayout from "../layout/DefaultLayout"
export default function Signup(){
    return (
        <DefaultLayout>
    <form className="form">
        <h1>Login</h1>
        <label>Username</label>
        <input type="text"/>
        <label>Contraseña</label>
        <input type="password"/>
        <button>Iniciar Sesión</button>

    </form>
   </DefaultLayout> 
    );
}