import NavBar from '../../Home/Secciones/SeccionHeader/NavBar/NavBar'
import BotonPedirCita from '../BotonPedirCita/BotonPedirCita'
import '../HeaderPages/headerPages.css'
import TextoCeleste from '../TextoCeleste/TextoCeleste'

const HeaderPages = ( {titulo, subtitulo, imagen} ) => {
    return (
        <div className='headerContacto'>
        <img className='headerContacto__image' src={imagen}></img>
        <div className='headerContacto__nav'>
        <NavBar />
        </div>
        <div className='headerContacto__info'>
          <TextoCeleste text={subtitulo} />
          <div className='headerContacto__info__descripcion'>
          <h1>{titulo}</h1>
          </div>
          <div className='headerContacto__info__pedirCita'>
          <BotonPedirCita text={"PEDIR CITA"} />
          </div>
        </div>
      </div>
    )
}
export default HeaderPages