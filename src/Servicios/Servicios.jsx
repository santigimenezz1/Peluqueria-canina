 import TarjetaServicio from '../Home/Secciones/SeccionNuestrosServicios/TarjetaServicio/TarjetaServicio'
import Footer from '../Layout/Footer/Footer'
import '../Servicios/servicios.css'
import HeaderPages from '../components/HeaderPages/HeaderPages'
import TextoCeleste from '../components/TextoCeleste/TextoCeleste'
import FormularioSolicitarServicios from './FormularioSolicitarServicio/FormularioSolicitarServicio'
import HeaderServicios from './HeaderServicios/HeaderServicios'
import TarjetaServicios from './TarjetaServicios/TarjetaServicios'
const Servicios = () => {
    return (
        <>
        <div className="servicios">
        <HeaderPages titulo={"Servicios"} subtitulo={"Un ambiente profesional"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716920497/landing%20perritos/Dog_Daycare_Business_Plan__The_2022_Getting_Started_Guide_th2jql.jpg"} />
            <h1 className='servicios__titulo'>Nuestros Servicios</h1>
            <div className='servicios__textoCeleste'>
            <TextoCeleste text={"Belleza y Estetica"} />
            </div>
            <div className='servicios__tarjetas'>
            <TarjetaServicios titulo={"Corte Tijera/Máquina"} descripcion={"Son dos técnicas que van de la mano y ayudan a mantener un acabado perfecto, tratando el manto de forma muy respetuosa según la herramienta aplicada."} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716851455/landing%20perritos/perro-3_eerazm.png"}/>
            <TarjetaServicios titulo={"Rasurado"} descripcion={"Es la recuperacion del manto, ayudando a que la piel transpire y mantenga un buen estado."} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716851455/landing%20perritos/perro-4_eo309t.png"} />
            <TarjetaServicios titulo={"Stripping"} descripcion={"Tecnica utilizada en razas de pelo corto y duro. Mejorar el color y su brillo natural son los beneficios que se obtienen."}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716851455/landing%20perritos/perro-5_k3azzn.png"}/>
            <TarjetaServicios titulo={"Hidratación del Pelo"} descripcion={"Dependiendo del tipo de pelo, de su textura, largo y forma, elegimos de manera personalizada, el mejor tratamiento para un acabado deslumbrante."}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716851455/landing%20perritos/perro-6_bb9cgp.png"}/>
            <TarjetaServicios titulo={"Baño de Ozono"} descripcion={"Pensando en el bienestar de nuestros niñ@s peludos, prestamos este sevicio. Este tratamiento desinfecta la piel y estimula el riego sanguineo con acción antioxidante, cicatrizante y limpieza total."}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716851454/landing%20perritos/perro-2_j3llpo.png"}/>
            </div>


            <div className='servicios__textoCeleste'>
            <TextoCeleste text={"Limpiezas y Cuidados"} />
            </div>
            <div className='servicios__tarjetas'>
            <TarjetaServicios titulo={"Baño y Secado"} descripcion={"Son dos técnicas que van de la mano y ayudan a mantener un acabado perfecto, tratando el manto de forma muy respetuosa según la herramienta aplicada."} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716853727/landing%20perritos/banos_l04ljn.png"}/>
            <TarjetaServicios titulo={"Corte de Uñas"} descripcion={"Es la recuperacion del manto, ayudando a que la piel transpire y mantenga un buen estado."} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716853728/landing%20perritos/tijeras-de-unas_byu4dd.png"} />
            <TarjetaServicios titulo={"Limpieza de Oidos"} descripcion={"Tecnica utilizada en razas de pelo corto y duro. Mejorar el color y su brillo natural son los beneficios que se obtienen."}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716853727/landing%20perritos/perro-7_kndqus.png"}/>
            <TarjetaServicios titulo={"Limpieza de Almohadillas"} descripcion={"Dependiendo del tipo de pelo, de su textura, largo y forma, elegimos de manera personalizada, el mejor tratamiento para un acabado deslumbrante."}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716853727/landing%20perritos/perro-7_kndqus.png"}/>
            <TarjetaServicios titulo={"Recuperación Manto"} descripcion={"Pensando en el bienestar de nuestros niñ@s peludos, prestamos este sevicio. Este tratamiento desinfecta la piel y estimula el riego sanguineo con acción antioxidante, cicatrizante y limpieza total."}  imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716853727/landing%20perritos/cuidado-de-mascotas_prkzw6.png"}/>
            </div>

            </div>
            <div className='container__forumarioSolicitarServicios'>
            <FormularioSolicitarServicios />
            </div>
            <Footer />
        </>
    )
}
export default Servicios