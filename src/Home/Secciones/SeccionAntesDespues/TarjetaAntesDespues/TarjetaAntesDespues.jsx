import '../TarjetaAntesDespues/tarjetaAntesDespues.css';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const TarjetaAntesDespues = () => {
    const FIRST_IMAGE = {
        imageUrl: 'https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716390941/landing%20perritos/fotos-perros-antes-despues-corte-pelo-grace-chon-fb_fajoec.jpg',
    };
    const SECOND_IMAGE = {
        imageUrl: 'https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716390941/landing%20perritos/fotos-perros-antes-despues-corte-pelo-grace-chon-fb_ezovik.jpg',
    };

    return (
        <div className="seccionAntesDespues">
            <ReactBeforeSliderComponent
                firstImage={FIRST_IMAGE}
                secondImage={SECOND_IMAGE}
            />
            <h1 className='text__before'>Before</h1>
            <h1 className='text__after'>After</h1>
        </div>
    );
}

export default TarjetaAntesDespues;
