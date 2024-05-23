import { useState } from "react";
import Layoutencabezado from "../layout/Layoutencabezado";
import { /*ErrorResponse,*/ Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthProvider";
import { API_URL } from "../Auth/constants";
import { AuthResponseError } from "../types/types";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorResponse, setErrorResponse]= useState("");

    const auth = useAuth();

    const goTo = useNavigate();
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        try{
            const response = await fetch(`${API_URL}/signup`,{
                method: "POST",
                headers: {
                    "content-Type":"application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    username,
                    password
                }),
            });
            if(response.ok){
                console.log("Usuario creado exitosamente");
                setErrorResponse("");
                goTo("/login");
            }else{
                console.log("Algo salio mal");
                const json = await response.json() as AuthResponseError;
                setErrorResponse(json.body.error);

                return;

            }
        }catch(error){
            console.log(error);
            alert("Algo salio mal");
        }
    }

    if(auth.isAuthenticated){
        return <Navigate to="/home"/>
    }
    
    return (
        <Layoutencabezado>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-container">
                    <h2>Regístrate</h2>
                    <input placeholder="Nombre Completo" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <input placeholder="Correo Electrónico" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input placeholder="Usuario" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input placeholder="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="BotonAcceder" type="submit">Regístrate</button>
                    {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
                </div>
            </form>
        </Layoutencabezado>
    );
}
