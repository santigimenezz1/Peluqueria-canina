import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Loading from '../../Home/Secciones/SeccionAtencionCliente/Loading/Loading'
import BotonPedirCita from '../../components/BotonPedirCita/BotonPedirCita'
import TextoCeleste from '../../components/TextoCeleste/TextoCeleste'
import '../FormularioSolicitarServicio/formularioSolicitarServicio.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ClearIcon from '@mui/icons-material/Clear';

const FormularioSolicitarServicios = () => {
    const [animales, setAnimales] = useState([]);

    const [fecha, setFecha] = useState(null);

    const agregarAnimal = () => {
        const objetoAnimal = { nombre: "", raza: "", id: crypto.randomUUID() };
        setAnimales([...animales, objetoAnimal]);
    };

    const eliminarAnimal = (id) => {
        const arregloFiltrado = animales.filter(animal => animal.id !== id);
        setAnimales(arregloFiltrado);
    };

    return (
        <div className="FormularioSolicitarServicios">
            <form>
                <div className='form__fecha'>
                <h1>Fecha</h1>
                <div className='form__fecha__calendario'>
                <DatePicker
                    selected={fecha}
                    onChange={(date) => setFecha(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Selecciona una fecha"
                    className='form__input__fecha'
                />
                <select className='form__input__select'>
                    <option value="opcion1">Mañana</option>
                    <option value="opcion2">Tarde</option>
                </select>
                </div>

                </div>
                <div className='form__servicios'>
                    <h1>Servicios</h1>
                    <input placeholder='servicio'></input>
                </div>
                <div className='form__animales'>
                <h1>Animales</h1>
                    <div className='botonAddAnimal' onClick={agregarAnimal}>
                        <AddCircleOutlineIcon />
                    </div>
                    <div className='form__input' >
                            <input placeholder='Nombre'></input>
                            <input placeholder='Raza'></input>
                            <select className='form__input__select'>
                                <option value="opcion1">Macho</option>
                                <option value="opcion2">Hembra</option>
                            </select>
                        </div>
                {
                   
                    animales?.map((animal) => (
                        <div className='form__input' key={animal.id}>
                            <input placeholder='Nombre'></input>
                            <input placeholder='Raza'></input>
                            <select className='form__input__select'>
                                <option value="opcion1">Macho</option>
                                <option value="opcion2">Hembra</option>
                            </select>
                            <div onClick={() => eliminarAnimal(animal.id)} className='container__botonClear'>
                                <ClearIcon className='botonClear' />
                            </div>
                        </div>
                    ))
                }
                <div>
                </div>
                </div>
                <div className='form__informacion'>
                    <h1>Información</h1>
                    <input placeholder='Nombre y apellidos'></input>
                    <input placeholder='Email'></input>
                    <input placeholder='Repetir email'></input>
                    <input placeholder='Whatsapp'></input>
                    <input className='input__textArea' placeholder='Comentarios'></input>
                </div>
                <div className='formularioSolicitarServicios__boton'>
                    <BotonPedirCita text={"Enviar mensaje"} />
                </div>
            </form>
        </div>
    )
}

export default FormularioSolicitarServicios;
