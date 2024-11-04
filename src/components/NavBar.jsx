import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import Logo from "../assets/RESELL UA.png";

function NavBar() {
  return (
    <ul className='button-container'>
      <li><Link to="/new-arrivals">Cele mai noi</Link></li>
      <li><Link to="/shoes">Încălțăminte</Link></li>
      <li className="logo-center"><Link to="/"><img src={Logo} alt="Logo" className="logo"/></Link> </li>
      <li><Link to="/clothing">Îmbrăcăminte</Link></li>
      <li><Link to="/accesories">Accesorii</Link></li>
    </ul>
  );
}

export default NavBar;
