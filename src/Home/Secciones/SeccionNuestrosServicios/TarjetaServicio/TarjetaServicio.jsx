 import '../TarjetaServicio/tarjetaServicio.css'
const TarjetaServicio = ( {text, img} ) => {
    return (
        <div className='tarjetaServicio'>
            <img src={img}></img>
            <h1> {text} </h1>
        </div>
    )
}
export default TarjetaServicio