import logo from "../assets/logo dsaw.png"
interface LayoutencabezadoProps{
    children: React.ReactNode;
}
export default function Layoutencabezado({children}:LayoutencabezadoProps){
    return(
        <>
        <header className="header">
        <div className="encabezado">
                <h1>WhistleUp</h1>
            </div> 
        </header>
        
        <div className="Contenido">
        <main>
           <div className="image-div">
           <img src={logo} alt="WhistleUp Logo" className="logo"></img>
           </div> 
                {children}
      
        </main> 
        </div>
        </>
    );
}