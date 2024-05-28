import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import BotonPedirCita from '../../../components/BotonPedirCita/BotonPedirCita';
import '../SeccionAtencionCliente/seccionAtencionCliente.css';

const SeccionAtencionCliente = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const templateParams = {
            nombre,
            email,
            mensaje
        };

        emailjs.send('service_pq131eq', 'template_0thietb', templateParams, 'XjMquqg7KQ908ur2Z')
            .then((response) => {
                console.log('Correo enviado con éxito:', response);
            }, (error) => {
                console.error('Error al enviar el correo:', error);
            });
        // Limpiar los campos del formulario después de enviar
        setNombre("");
        setEmail("");
        setMensaje("");
    };

    const handleChange = (event, setEstado) => {
        setEstado(event.target.value);
    };

    return (
        <div className="SeccionAtencionCliente">
            <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1716383442/landing%20perritos/-5_pxn4u6.jpg' alt="Perros" />
            <div className='seccionAtencionCliente__formulario'>
                <h2>Contacta con nosotros</h2>
                <h1>Att al cliente</h1>
                <form onSubmit={handleSubmit} className='form'>
                    <input value={nombre} onChange={(event) => handleChange(event, setNombre)} placeholder='Nombre' type='text' />
                    <input value={email} onChange={(event) => handleChange(event, setEmail)} placeholder='Email' type='text' />
                    <textarea value={mensaje} onChange={(event) => handleChange(event, setMensaje)} placeholder='Mensaje' />
                        <BotonPedirCita text={"Enviar mensaje"} />
                </form>
            </div>
        </div>
    );
};

export default SeccionAtencionCliente;
