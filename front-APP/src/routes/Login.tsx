import { useState } from "react";
import Layoutencabezado from "../layout/Layoutencabezado";
import { useAuth } from "../Auth/AuthProvider";
import { Navigate } from "react-router-dom";

export default function Login(){
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const auth = useAuth();

    if(auth.isAuthenticated){
        return <Navigate to="/home" />;
    }
   
    return (
        
   <Layoutencabezado>
    <form className="form">   
        <div className="form-container">
        <input placeholder="Usuario" type="text" value={username} onChange={(e)=> setusername(e.target.value)}/>
        <input placeholder="Contraseña" type="password" value={password} onChange={(e)=> setpassword(e.target.value)}/>
        <button className="BotonAcceder">Acceder</button>
        <button className="BotonRegistrar" >Regístrarse</button>
        </div>
    </form>
   </Layoutencabezado> 
    
    );
}