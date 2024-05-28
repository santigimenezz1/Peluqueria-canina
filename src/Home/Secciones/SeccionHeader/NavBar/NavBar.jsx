import './navBar.css'
import BotonNav from './BotonNav/BotonNav'
import BotonPedirCita from '../../../../components/BotonPedirCita/BotonPedirCita'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
     <div className="navBar">
        <Link to={'/'}>
        <img  className='navBar__logo' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1715935054/landing%20perritos/perro_hlxhsc.png'></img>
        </Link>
        <ul className='navBar__enlaces'>
            <Link to={"/"}>
            <li><BotonNav text={"HOME"}/></li>
            </Link>
            <Link to={"/nosotros"}>
            <li><BotonNav text={"NOSOTROS"}/></li>
            </Link>
            <Link to={"/servicios"}>
            <li><BotonNav text={"SERVICIOS"}/></li>
            </Link>
            <Link to={"/contacto"}>
            <li><BotonNav text={"CONTACTO"}/></li>
            </Link>
        </ul>
        <div className='navBar__ReservarCita'>
        <BotonPedirCita text={"RESERVAR CITA"} />
        </div>
     </div>
    )
}

export default NavBar