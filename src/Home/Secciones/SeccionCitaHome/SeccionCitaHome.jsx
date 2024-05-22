 import '../SeccionCitaHome/seccionCitaHome.css'
import TarjetaCitaHome from './TarjetaCitaHome/TarjetaCitaHome'
const SeccionCitaHome = () => {
    return (
        <div className="seccionCitaHome">
            <div className='seccionCitaHome__tarjetas'>
            <TarjetaCitaHome imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716387878/landing%20perritos/Imagen_22-5-24_a_las_16.21_awmiyh.jpg"} titulo={"Reserve la cita"} subtitulo={"Realice la reserva por la web indicando la fecha deseada"} />
            <TarjetaCitaHome imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716387879/landing%20perritos/Imagen_22-5-24_a_las_16.21_d2xosl.jpg"} titulo={"Confirmación"} subtitulo={"Nos pondremos en contacto con usted para confirmar la cita"} />
            <TarjetaCitaHome imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716387878/landing%20perritos/Imagen_22-5-24_a_las_16.21_pomzgt.jpg"} titulo={"Servicio"} subtitulo={"Traiga a su perrito a nuestro salón para realizar el servicio"} />
            <TarjetaCitaHome imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716387879/landing%20perritos/Imagen_22-5-24_a_las_16.21_l4zml7.jpg"} titulo={"Informe"} subtitulo={"Valoramos la actitud del perrito con una grafica de puntuaciones"} />
            </div>
            <div className='seccionCitaHome__imagen'>
                <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716387881/landing%20perritos/Imagen_22-5-24_a_las_16.21_jlzrug.jpg'></img>

            </div>
        </div>
    )
}
export default SeccionCitaHome