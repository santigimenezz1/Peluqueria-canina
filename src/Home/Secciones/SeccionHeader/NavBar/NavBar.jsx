import './navBar.css'
import BotonNav from './BotonNav/BotonNav'
import BotonPedirCita from '../../../../components/BotonPedirCita/BotonPedirCita'
const NavBar = () => {
    return (
     <div className="navBar">
        <img  className='navBar__logo' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1715935054/landing%20perritos/perro_hlxhsc.png'></img>
        <ul className='navBar__enlaces'>
            <li><BotonNav text={"HOME"}/></li>
            <li><BotonNav text={"SERVICIOS"}/></li>
            <li><BotonNav text={"NOSOTROS"}/></li>
            <li><BotonNav text={"GALERIA"}/></li>
        </ul>
        <div className='navBar__ReservarCita'>
        <BotonPedirCita text={"RESERVAR CITA"} />
        </div>
     </div>
    )
}

export default NavBar