import React, { useState } from "react";
import Layoutencabezado from "../layout/Layoutencabezado";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const user = {
            name: name,
            email: email,
            username: username,
            password: password,
        };

        try {
            fetch('https://dsaw-2024-1-proyecto-final-api-urrea-medina.vercel.app/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud.');
                }
                return response.json();
            })
            .then(data => {
                console.log("Usuario registrado:", data);
                // Puedes redirigir al usuario a la página de inicio o mostrar un mensaje de éxito
            })
            .catch(error => {
                console.error("Error:", error);
                // Muestra un mensaje de error al usuario
            });
        } catch (error) {
            console.error("Error:", error);
            // Muestra un mensaje de error al usuario
        }
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
                </div>
            </form>
        </Layoutencabezado>
    );
}
