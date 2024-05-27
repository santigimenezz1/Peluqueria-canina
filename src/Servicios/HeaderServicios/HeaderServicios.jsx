import NavBar from '../../Home/Secciones/SeccionHeader/NavBar/NavBar'
import BotonPedirCita from '../../components/BotonPedirCita/BotonPedirCita'
import TextoCeleste from '../../components/TextoCeleste/TextoCeleste'
import '../HeaderServicios/headerServicios.css'

const HeaderServicios = () => {
    return (
        <div className='headerServicios'>
        <img className='headerServicios__image' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716363316/landing%20perritos/estetica_canina_ledwqh.jpg'></img>
        <div className='headerServicios__nav'>
        <NavBar/>
        </div>
        <div className='headerServicios__info'>
          <TextoCeleste text={"Con amor y profesionalidad"} />
          <div className='headerServicios__info__descripcion'>
          <h1>Servicios</h1>
          </div>
          <div className='headerServicios__info__pedirCita'>
          <BotonPedirCita text={"PEDIR CITA"} />
          </div>
        </div>
      </div>
    )
}
export default HeaderServicios