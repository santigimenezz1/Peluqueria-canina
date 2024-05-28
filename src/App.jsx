import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import SobreNosotros from './SobreNosotros/SobreNosotros';
import Servicios from './Servicios/Servicios';
import Contacto from './Contacto/Contacto';

function App() {
  return (
    <div className='containerPrincipal'>
      <img 
        className='containerPrincipal__imagenWhatsapp' 
        src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716373884/landing%20perritos/logo_pytkjb.png' 
        alt='Logo de Whatsapp' 
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
