import Footer from "../Layout/Footer/Footer"
import HeaderPages from "../components/HeaderPages/HeaderPages"
import HeaderSobreNosotros from "./HeaderSobreNosotros/HeaderSobreNosotros"
import SeccionQuienSoy from "./SeccionQuienSoy/SeccionQuienSoy"

const SobreNosotros = () => {
    return (
        <div>
            <HeaderPages titulo={"Nosotros"} subtitulo={"Mucho amor y compromiso"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716920359/landing%20perritos/Convertirse_en_un_peluquero_para_perros__7_consejos_mwjbdr.jpg"} />
            <SeccionQuienSoy />
            <Footer />
        </div>
    )
}
export default SobreNosotros