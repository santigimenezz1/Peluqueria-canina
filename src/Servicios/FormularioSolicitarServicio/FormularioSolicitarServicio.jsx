 import Loading from '../../Home/Secciones/SeccionAtencionCliente/Loading/Loading'
import BotonPedirCita from '../../components/BotonPedirCita/BotonPedirCita'
import TextoCeleste from '../../components/TextoCeleste/TextoCeleste'
import '../FormularioSolicitarServicio/formularioSolicitarServicio.css'
const FormularioSolicitarServicios = () => {
    return (
        <div className="FormularioSolicitarServicios">
            <div className='formularioSolicitarServicios__titulo'>
                <TextoCeleste text={"Reservar cita"} />
            </div>
                <form>
                    <h1>Fecha</h1>
                    <input placeholder='fecha'></input>
                    <input placeholder='Mañana o tarde'></input>
                    <div className='form__servicios'>
                    <h1>Servicios</h1>
                    <input placeholder='servicio'></input>
                    </div>
                    <h1>Animales</h1>
                    <input placeholder='Nombre'></input>
                    <input placeholder='Raza'></input>
                    <input placeholder='Macho o hembra'></input>
                    <div className='form__informacion'>
                    <h1>Información</h1>
                    <input placeholder='Nombre y apellidos'></input>
                    <input placeholder='Email'></input>
                    <input placeholder='Repetir email'></input>
                    <input placeholder='Whatsapp'></input>
                    <input className='input__textArea' placeholder='Comentarios'></input>
                    </div>
                    <div className='formularioSolicitarServicios__boton'>
                    <BotonPedirCita text={"Enviar mensaje"} />
                    </div>
                </form>
        </div>
    )
}
export default FormularioSolicitarServicios