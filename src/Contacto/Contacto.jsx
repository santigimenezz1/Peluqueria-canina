import React from 'react';
import 'leaflet/dist/leaflet.css';
import NavBar from "../Home/Secciones/SeccionHeader/NavBar/NavBar";
import '../Contacto/contacto.css';
import HeaderContacto from "./HeaderContacto/HeaderContacto";
import TarjetaCitaHome from "../Home/Secciones/SeccionCitaHome/TarjetaCitaHome/TarjetaCitaHome";
import SeccionAtencionCliente from "../Home/Secciones/SeccionAtencionCliente/SeccionAtencionCliente";
import Footer from "../Layout/Footer/Footer";
import TextoCeleste from "../components/TextoCeleste/TextoCeleste";
import HeaderPages from "../components/HeaderPages/HeaderPages";
import MapComponent from "./Mapa/Mapa"; // Asegúrate de que la ruta es correcta

const Contacto = () => {
    return (
        <div className="contacto">
            <HeaderPages titulo={"Contacto"} subtitulo={"Peluqueria canina en Valencia"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716920574/landing%20perritos/Grooming_Different_Types_of_Dog_Coats_Top_Dog_Tips_owtlbj.jpg"} />
            <div className="container__tarjetaCitaHome">
                <TarjetaCitaHome imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716797912/landing%20perritos/Imagen_27-5-24_a_las_10.13_jfrtg9.jpg"} titulo={"Horario"} subtitulo={"Lun - Sab 9 a 18 hs"} />
                <TarjetaCitaHome imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716797912/landing%20perritos/Imagen_27-5-24_a_las_10.13_1_m8axi0.jpg"} titulo={"Telefono"} subtitulo={"610-04-65-65"} />
                <TarjetaCitaHome imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716797912/landing%20perritos/Imagen_27-5-24_a_las_10.13_1_pk31jo.jpg"} titulo={"Email"} subtitulo={"Rizzos@gmail.com"} />
                <TarjetaCitaHome imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716797912/landing%20perritos/Imagen_27-5-24_a_las_10.14_1_edw95m.jpg"} titulo={"Ubicación"} subtitulo={"Mont Olivet 14"} />
            </div>
            <SeccionAtencionCliente />
            <div>
                <div className="textoCeleste__ubicacion">
                <TextoCeleste text={"Nuestra ubicación"} />
                </div>
                <div className='componente__ubicacionContacto'>
                <MapComponent />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contacto;
