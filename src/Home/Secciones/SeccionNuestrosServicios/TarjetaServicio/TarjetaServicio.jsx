 import '../TarjetaServicio/tarjetaServicio.css'
const TarjetaServicio = ( {text} ) => {
    return (
        <div className='tarjetaServicio'>
            <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716382004/landing%20perritos/How_to_Properly_Trim_Your_Dog_s_Nails_According_to_Veterinarians_iafl87.jpg'></img>
            <h1> {text} </h1>
        </div>
    )
}
export default TarjetaServicio