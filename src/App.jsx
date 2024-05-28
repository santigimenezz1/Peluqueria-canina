import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import SobreNosotros from './SobreNosotros/SobreNosotros';
import Servicios from './Servicios/Servicios';
import Contacto from './Contacto/Contacto';
import IconoWhatsapp from './components/IconoWhatsapp/IconoWhatsapp';


function App() {
  return (
    <div className='containerPrincipal'>
      <div className='containerPrincipal__imagenWhatsapp'>
      <IconoWhatsapp />
      </div>
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
