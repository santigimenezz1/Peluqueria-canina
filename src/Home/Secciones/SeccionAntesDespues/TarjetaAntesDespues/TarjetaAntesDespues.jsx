import { useState } from 'react';
import '../TarjetaAntesDespues/tarjetaAntesDespues.css';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const TarjetaAntesDespues = ( {imagen1, imagen2} ) => {
    const [estado, setEstado] = useState(false)

    const cambiarEstado = () => {
        setEstado(true)
    }
    const cambiarEstadoOff = () => {
        setEstado(false)
    }

    const FIRST_IMAGE = {
        imageUrl: imagen1,
    };
    const SECOND_IMAGE = {
        imageUrl: imagen2,
    };

    return (
        <div onMouseOver={()=>cambiarEstado()} onMouseOut={()=>cambiarEstadoOff()} className="seccionAntesDespues">
            <ReactBeforeSliderComponent
                firstImage={FIRST_IMAGE}
                secondImage={SECOND_IMAGE}
            />
            <h1 className={ estado ? 'text__after' : 'text__afterOn'}>Antes</h1>
            <h1 className={ estado ? 'text__before' : 'text__beforeOn'}>Despues</h1>
        </div>
    );
}

export default TarjetaAntesDespues;
