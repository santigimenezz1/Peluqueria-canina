import '../SeccionNuestrosServicios/seccionNuestrosServicios.css'
import TarjetaServicio from './TarjetaServicio/TarjetaServicio'
const SeccionNuestrosServicios = () => {
    return (
        <div className='seccionNuestrosServicios'>
            <h2>Nuestros servicios</h2>
            <div className='seccionNuestrosServicios__tarjeta'>
     <TarjetaServicio text={"Corte de uñas"} />
     <TarjetaServicio text={"Corte de uñas"} />
     <TarjetaServicio text={"Corte de uñas"} />
     <TarjetaServicio text={"Corte de uñas"} />
     <TarjetaServicio text={"Corte de uñas"} />
     <TarjetaServicio text={"Corte de uñas"} />
     <TarjetaServicio text={"Corte de uñas"} />
     <TarjetaServicio text={"Corte de uñas"} />
            </div>
        </div>
    )
}
export default SeccionNuestrosServicios