import Layoutencabezado from "../layout/Layoutencabezado";

export default function Login(){
    return (
   <Layoutencabezado>
    <form className="form">
        <div className="form-container">
        <input placeholder="Usuario" type="text"/>
        <input placeholder="Contraseña" type="password"/>
        <button className="BotonAcceder">Acceder</button>
        <button className="BotonRegistrar">Regístrarse</button>
        </div>
    </form>
   </Layoutencabezado> 
    
    );
}