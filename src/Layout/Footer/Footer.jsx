 import '../Footer/footer.css'
 import LocationOnIcon from '@mui/icons-material/LocationOn';
 import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Footer = () => {
    return (
        <div className='container__footer'>
        <div className="footer">
        <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716415646/landing%20perritos/Imagen_23-5-24_a_las_0.06_sazw0m.jpg'></img>
            <div className='header__horarios'>
                <h1>HORARIOS</h1>
                <span>Lunes-Viernes: 09:00-19:00</span>
                <span>Sábados y Domingos: Cerrado</span>

            </div>
            <div className='header__infoDireccion'>
                <h1>INFORMACIÓN</h1>
                <h2><span><LocationOnIcon /> </span>Calle orient 4 Mont Olivet</h2>
                <h2><span><LocalPhoneIcon /> </span> 610046565/ 610056574</h2>
            </div>

        </div>

        </div>
    )
}
export default Footer