import logo from "../assets/logo dsaw.png"
import img_boton_home from "../assets/boton home.png"
import img_boton_profile from "../assets/boton profile.png"
import img_boton_create from "../assets/boton create.png"
import img_boton_search from "../assets/boton search.png"
import img_boton_logout from "../assets/boton logout.png"
import { Link } from "react-router-dom"
import { useAuth } from "../Auth/AuthProvider"
import { API_URL } from "../Auth/constants"

interface LayoutcuerpoProps{
    children: React.ReactNode;
}
export default function Layoutcuerpo({children}:LayoutcuerpoProps){

  const auth = useAuth();
  async function handleSignout(e:React.MouseEvent<HTMLImageElement>){
    e.preventDefault();
    try{
      const response = await fetch(`${API_URL}/signout`,{
        method: "DELETE",
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${auth.getRefreshToken()}`,

        },
      });
      if(response.ok){
        auth.signOut();
      }
    }catch{

    }

  }
    return(
        <>
  <header className="header">
    <div className="encabezado-cuerpo">
      <div className="cuadro-cuerpo">
        <div className="cuadro-img-cuerpo">
          <img src={logo} alt="WhistleUp Logo" className="logo-cuerpo" />
        </div>
        <h1 className="titulocuerpo">WhistleUp</h1>
      </div>
    </div>
  </header>
  
  <div className="Contenido-cuerpo">
    <div className="main-cuerpo">
      {children}
    </div>
  </div>

  <footer className="footer">
    <div className="Menu-nav">
    <Link to="/home"><img src={img_boton_home} alt="Home" className="imagenes-nav" /></Link>
    <Link to="/create"><img src={img_boton_create} alt="Create Tweet" className="imagenes-nav" /></Link>
    <Link to="/search"><img src={img_boton_search} alt="Search Tweet" className="imagenes-nav" /></Link>
    <Link to="/profile"><img src={img_boton_profile} alt="Profile" className="imagenes-nav" /></Link>
    <Link to="/login"><img src={img_boton_logout} alt="Logout" className="imagenes-nav" onClick={handleSignout}/></Link>

    </div>
  </footer>
</>
    );
}