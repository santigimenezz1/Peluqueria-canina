import './App.css'
import SeccionHeader from './Home/Secciones/SeccionHeader/SeccionHeader'
import SeccionNosotros from './Home/Secciones/SeccionNosotrosHome/SeccionNosotrosHome'
import SeccionNuestrosClientes from './Home/Secciones/SeccionNuestrosClientes/SeccionNuestrosClientes'

function App() {
  return (
 <div className='containerPrincipal'>
  <img className='containerPrincipal__imagenWhatsapp' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716373884/landing%20perritos/logo_pytkjb.png'></img>
 <SeccionHeader />
 <SeccionNosotros />
 <SeccionNuestrosClientes />

 </div>
  )
}

export default App
