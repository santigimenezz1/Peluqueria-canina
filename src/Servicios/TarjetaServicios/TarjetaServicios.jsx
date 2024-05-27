 import '../TarjetaServicios/tarjetaServicios.css'
const TarjetaServicios = ( {titulo, descripcion, imagen} ) => {
    return (
        <div className='container__tarjetaServicios'>
            <img src={imagen}></img>
        <div className="TarjetaServicios">
            <h1>{titulo}</h1>
            <span>{descripcion}</span>

        </div>

        </div>
    )
}
export default TarjetaServicios