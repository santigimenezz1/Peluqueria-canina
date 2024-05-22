import '../SeccionNuestrosClientes/seccionNuestrosClientes.css'
const SeccionNuestrosClientes = () => {
    return (
        <div className='seccionNuestrosClientes'>
            <div className='seccionNuestrosClientes__texto'>
           <h2>Valoraciones</h2>
           <h1>NUESTROS CLIENTES</h1>
            </div>
           <div className='seccionNuestrosClientes__imagenes'>
            <div className='seccionNustrosClientes__imagenes-tarjeta'>
            <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716377440/landing%20perritos/Imagen_22-5-24_a_las_13.28_1_yb8pkq.jpg'></img>
            <h1>Toby</h1>
            <span>Me encanta como me trata isabel. No me gusta bañarme pero de vez en cuando me dejo</span>
            </div>
            <div className='seccionNustrosClientes__imagenes-tarjeta'>
            <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716377440/landing%20perritos/Imagen_22-5-24_a_las_13.30_sobfvc.jpg'></img>
            <h1>Paco Pepe</h1>
<span>Me encanta como me trata isabel. No me gusta bañarme pero de vez en cuando me dejo</span>
            </div>
            <div className='seccionNustrosClientes__imagenes-tarjeta'>
            <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716377440/landing%20perritos/Imagen_22-5-24_a_las_13.28_szxufn.jpg'></img>
            <h1>Wifi</h1>
<span>Me encanta como me trata isabel. No me gusta bañarme pero de vez en cuando me dejo</span>
            </div>
           </div>

        </div>
    )
}
export default SeccionNuestrosClientes