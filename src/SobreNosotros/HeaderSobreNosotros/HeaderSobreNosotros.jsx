import NavBar from '../../Home/Secciones/SeccionHeader/NavBar/NavBar'
import BotonPedirCita from '../../components/BotonPedirCita/BotonPedirCita'
import TextoCeleste from '../../components/TextoCeleste/TextoCeleste'
import '../HeaderSobreNosotros/headerSobreNosotros.css'

const HeaderSobreNosotros = () => {
    return (
        <div className='headerSobreNosotros'>
        <img className='headerSobreNosotros__image' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716363316/landing%20perritos/estetica_canina_ledwqh.jpg'></img>
        <div className='headerSobreNosotros__nav'>
        <NavBar />
        </div>
        <div className='headerSobreNosotros__info'>
          <TextoCeleste text={"Amor por nuestros perritos"} />
          <div className='headerSobreNosotros__info__descripcion'>
          <h1>Sobre nosotros</h1>
          </div>
          <div className='headerSobreNosotros__info__pedirCita'>
          <BotonPedirCita text={"PEDIR CITA"} />
          </div>
        </div>
      </div>
    )
}
export default HeaderSobreNosotros