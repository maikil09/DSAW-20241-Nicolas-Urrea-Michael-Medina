import { useState } from "react";
import Layoutencabezado from "../layout/Layoutencabezado";
import { useAuth } from "../Auth/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { API_URL } from "../Auth/constants";
import { AuthResponse, AuthResponseError } from "../types/types";


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorResponse, setErrorResponse]= useState("");
    const auth = useAuth();
    const goTo = useNavigate();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        try{
            const response = await fetch(`${API_URL}/login`,{
                method: "POST",
                headers: {
                    "content-Type":"application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                }),
            });
            if(response.ok){
                console.log("Inicio de Sesión exitoso");
                setErrorResponse("");
                const json = (await response.json()) as AuthResponse;
                
                if(json.body.accessToken && json.body.refreshToken){
                    auth.saveUser(json);
                }
                goTo("/home");
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
            <form className="form" onSubmit={handleSubmit} >
                <div className="form-container">
                    <input
                        placeholder="Usuario"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        placeholder="Contraseña"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="BotonAcceder" type="submit">Acceder</button>
                    <button className="BotonRegistrar">Registrarse</button>
                    {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
                </div>
            </form>
        </Layoutencabezado>
    );
}
