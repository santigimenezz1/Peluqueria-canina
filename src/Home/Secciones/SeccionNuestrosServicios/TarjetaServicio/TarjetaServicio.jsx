 import '../TarjetaServicio/tarjetaServicio.css'
const TarjetaServicio = ( {text, imagen1, imagen2} ) => {
    return (
        <div className='tarjetaServicio'>
            <div class="card">
  <div class="card-inner">
    <div class="card-front">
        <span className='card-font__span'>{text}</span>
      <img src={imagen1}></img>
      
    </div>
    <div class="card-back">
    <p className='card-font__span'>{text}</p>
      <img src={imagen2}></img>
    </div>
  </div>
</div>

        </div>
    )
}
export default TarjetaServicio