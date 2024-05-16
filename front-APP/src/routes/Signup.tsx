import Layoutencabezado from "../layout/Layoutencabezado";

export default function Signup(){
    return (
        <Layoutencabezado>
        <form className="form">
            <div className="form-container">
            <h2>Regístrate</h2> 
            <input placeholder="Usuario" type="text"/>
            <input placeholder="Contraseña" type="password"/>
            <button className="BotonAcceder">Acceder</button>
            <button className="BotonRegistrar">Regístrarse</button>
            </div>
        </form>
       </Layoutencabezado>  
    );
}