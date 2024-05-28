import Footer from "../Layout/Footer/Footer"
import VideoPublicidad from "../components/VideoPublicidad/VideoPublicidad"
import SeccionAntesDespues from "./Secciones/SeccionAntesDespues/SeccionAntesDespues"
import SeccionAtencionCliente from "./Secciones/SeccionAtencionCliente/SeccionAtencionCliente"
import SeccionCitaHome from "./Secciones/SeccionCitaHome/SeccionCitaHome"
import SeccionHeader from "./Secciones/SeccionHeader/SeccionHeader"
import SeccionNosotros from "./Secciones/SeccionNosotrosHome/SeccionNosotrosHome"
import SeccionNuestrosClientes from "./Secciones/SeccionNuestrosClientes/SeccionNuestrosClientes"
import SeccionNuestrosServicios from "./Secciones/SeccionNuestrosServicios/SeccionNuestrosServicios"

const Home = () => {
    return (
        <div className="Home">
            <SeccionHeader />
            <SeccionNosotros />
            <SeccionNuestrosClientes />
            <SeccionCitaHome />
            <SeccionAtencionCliente />
            <SeccionNuestrosServicios />
            <SeccionAntesDespues />
            <VideoPublicidad />
            <Footer />



            
        </div>
    )
}
export default Home