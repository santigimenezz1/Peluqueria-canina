import { Link } from 'react-router-dom'
import BotonPedirCita from '../../../components/BotonPedirCita/BotonPedirCita'
import TextoCeleste from '../../../components/TextoCeleste/TextoCeleste'
import NavBar from './NavBar/NavBar'

import './seccionHeader.css'
const SeccionHeader = () => {
    return (
        <div className='header'>
        <img className='header__image' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716363316/landing%20perritos/estetica_canina_ledwqh.jpg'></img>
        <div className='header__nav'>
        <NavBar />
        </div>
        <div className='header__info'>
          <TextoCeleste text={"Peluqueria canina en Valencia"} />
          <div className='header__info__descripcion'>
          <h1>Por nuestros peludos favoritos, mejoramos cada día</h1>
          </div>
          <div className='header__info__pedirCita'>
            <Link to={'/servicios'}>
          <BotonPedirCita text={"PEDIR CITA"} />
            </Link>
          </div>
        </div>
      </div>
    )
}
export default SeccionHeader