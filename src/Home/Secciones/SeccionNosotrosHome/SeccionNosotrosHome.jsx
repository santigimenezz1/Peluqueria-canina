 import { Link } from 'react-router-dom'
import BotonPedirCita from '../../../components/BotonPedirCita/BotonPedirCita'
import './seccionNosotrosHome.css'
const SeccionNosotros = () => {
    return (
        <div className='seccionNosotrosHome'>
            <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716375594/landing%20perritos/Imagen_22-5-24_a_las_12.58_ywfhru.jpg'></img>
            <div className='seccionNosotrosHome__info'>
                <h1>SOBRE NOSOTROS</h1>
                <h2>EXPERTOS EN ESTETICA CANINA</h2>
                <span>ES LA INSPIRACIÓN EN EL AMOR Y
                      CUIDADOS PARA NUESTROS HIJOS
                      PERRUNOS LEO QUE ES UN LINDO
                      CANICHE Y THEO UN LINDO SCHNAUZER
                      SON DOS RAZAS QUE NECESITAN MUCHO
                      CUIDADO POR SU TIPO DE MANTO.
                    </span>
                     <div>
                        <Link to={"/nosotros"}>
                    <BotonPedirCita text={"SOBRE NOSOTROS"} />
                        </Link>
                     </div>
            </div>

        </div>
    )
}
export default SeccionNosotros