import { useState } from "react";
import { useAuth } from "../Auth/AuthProvider";
import Layoutencabezado from "../layout/Layoutencabezado";
import { Navigate } from "react-router-dom";
import { API_URL } from "../Auth/constantes";

export default function Signup(){
    const [Name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const auth = useAuth();

    if(auth.isAuthenticated){
        return <Navigate to="/home" />;
    }
    return (
        <Layoutencabezado>
        <form className="form" >
            <div className="form-container">
            <h2>Regístrate</h2> 
            <input placeholder="Nombre Completo" type="text" value={Name} onChange={(e)=> setName(e.target.value)}/>
            <input placeholder="Correo Electrónico" type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input placeholder="Usuario" type="text" value={username} onChange={(e)=> setusername(e.target.value)}/>
            <input placeholder="Contraseña" type="password" value={password} onChange={(e)=> setpassword(e.target.value)}/>
            <button className="BotonAcceder">Regístrate</button>
            </div>
        </form>
       </Layoutencabezado>  
    );
}