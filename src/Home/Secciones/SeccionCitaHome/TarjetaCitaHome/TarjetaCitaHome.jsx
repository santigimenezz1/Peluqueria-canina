 import '../TarjetaCitaHome/tarjetaCitaHome.css'
const TarjetaCitaHome = ( {imagen, titulo, subtitulo} ) => {
    return (
        <div className='tarjetaCitaHome'>
        <img src={imagen}></img>
        <h2>{titulo}</h2>
        <h3>{subtitulo}</h3>
        </div>
    )
}
export default TarjetaCitaHome