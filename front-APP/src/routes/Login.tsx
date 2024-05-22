import { useState } from "react";
import Layoutencabezado from "../layout/Layoutencabezado";
import { useAuth } from "../Auth/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const auth = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    // Definir el tipo del evento para el registro
    const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate('/Signup');
    };

    // Definir el tipo del evento para el submit
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("https://dsaw-2024-1-proyecto-final-api-urrea-medina.vercel.app/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ UserOrEmail: username, password: password }),
                credentials: "include",
            });

            const data = await response.json();
            if (response.ok) {
                auth.login(data); // Utiliza el método login del contexto
                navigate('/home');
            } else {
                setError(data.error);
                console.log("El usuario no esta registrado");
            }
        } catch (error) {
            console.error("Error:", error);
            setError("Error during login, please try again.");
        }
    };

    return (
        <Layoutencabezado>
            <form className="form" onSubmit={handleSubmit}>
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
                    <button className="BotonRegistrar" onClick={handleRegister}>Registrarse</button>
                    {error && <p>{error}</p>}
                </div>
            </form>
        </Layoutencabezado>
    );
}
