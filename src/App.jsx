import './App.css'
import SeccionAntesDespues from './Home/Secciones/SeccionAntesDespues/SeccionAntesDespues'
import SeccionAtencionCliente from './Home/Secciones/SeccionAtencionCliente/SeccionAtencionCliente'
import SeccionCitaHome from './Home/Secciones/SeccionCitaHome/SeccionCitaHome'
import SeccionHeader from './Home/Secciones/SeccionHeader/SeccionHeader'
import SeccionNosotros from './Home/Secciones/SeccionNosotrosHome/SeccionNosotrosHome'
import SeccionNuestrosClientes from './Home/Secciones/SeccionNuestrosClientes/SeccionNuestrosClientes'
import SeccionNuestrosServicios from './Home/Secciones/SeccionNuestrosServicios/SeccionNuestrosServicios'

function App() {
  return (
 <div className='containerPrincipal'>
  <img className='containerPrincipal__imagenWhatsapp' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716373884/landing%20perritos/logo_pytkjb.png'></img>
 <SeccionHeader />
 <SeccionNosotros />
 <SeccionNuestrosClientes />
 <SeccionAtencionCliente />
 <SeccionCitaHome />
 <SeccionAntesDespues />
 </div>
  )
}

export default App
