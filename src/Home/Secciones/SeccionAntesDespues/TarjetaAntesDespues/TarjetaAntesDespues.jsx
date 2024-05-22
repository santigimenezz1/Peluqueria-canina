import '../TarjetaAntesDespues/tarjetaAntesDespues.css';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const TarjetaAntesDespues = ( {imagen1, imagen2} ) => {
    const FIRST_IMAGE = {
        imageUrl: imagen1,
    };
    const SECOND_IMAGE = {
        imageUrl: imagen2,
    };

    return (
        <div className="seccionAntesDespues">
            <ReactBeforeSliderComponent
                firstImage={FIRST_IMAGE}
                secondImage={SECOND_IMAGE}
            />
            <h1 className='text__after'>Antes</h1>
            <h1 className='text__before'>Despues</h1>
        </div>
    );
}

export default TarjetaAntesDespues;
