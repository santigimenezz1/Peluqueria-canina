 import BotonPedirCita from '../../../components/BotonPedirCita/BotonPedirCita'
import '../SeccionAtencionCliente/seccionAtencionCliente.css'
const SeccionAtencionCliente = () => {
    return (
        <div className="SeccionAtencionCliente">
         <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716383442/landing%20perritos/-5_pxn4u6.jpg'></img>
         <div className='seccionAtencionCliente__formulario'>
          <h2>Contacta con nosotros</h2>
          <h1>Att al cliente</h1>
          <h1></h1>
         <form className='form'>
            <input placeholder='Nombre' type='text'></input>
            <input placeholder='Email' type='text'></input>
            <textarea placeholder='Mensaje' />
            <BotonPedirCita text={"Enviar mensaje"} />


         </form>
         </div>
        </div>
    )
}
export default SeccionAtencionCliente