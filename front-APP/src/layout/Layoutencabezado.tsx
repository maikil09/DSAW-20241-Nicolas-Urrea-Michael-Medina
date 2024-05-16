interface LayoutencabezadoProps{
    children: React.ReactNode;
}
export default function Layoutencabezado({children}:LayoutencabezadoProps){
    return(
        <>
        <header>
        <div className="encabezado">
                <h1>WhistleUp</h1>
            </div> 
        </header>
        <div className="Contenido">
        <main>
                {children}
      
        </main> 
        </div>
        </>
    );
}