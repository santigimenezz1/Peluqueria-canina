import NavBar from '../../Home/Secciones/SeccionHeader/NavBar/NavBar'
import BotonPedirCita from '../../components/BotonPedirCita/BotonPedirCita'
import TextoCeleste from '../../components/TextoCeleste/TextoCeleste'
import '../HeaderContacto/headerContacto.css'

const HeaderContacto = () => {
    return (
        <div className='headerContacto'>
        <img className='headerContacto__image' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716363316/landing%20perritos/estetica_canina_ledwqh.jpg'></img>
        <div className='headerContacto__nav'>
        <NavBar />
        </div>
        <div className='headerContacto__info'>
          <TextoCeleste text={"Peluqueria canina en Valencia"} />
          <div className='headerContacto__info__descripcion'>
          <h1>Contacto</h1>
          </div>
          <div className='headerContacto__info__pedirCita'>
          <BotonPedirCita text={"PEDIR CITA"} />
          </div>
        </div>
      </div>
    )
}
export default HeaderContacto