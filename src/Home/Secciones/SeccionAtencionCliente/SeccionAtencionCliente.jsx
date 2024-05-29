import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import BotonPedirCita from '../../../components/BotonPedirCita/BotonPedirCita';
import '../SeccionAtencionCliente/seccionAtencionCliente.css';
import Loading from './Loading/Loading';
import Swal from 'sweetalert2';

const SeccionAtencionCliente = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [telefono, setTelefono] = useState("");

    const [loading, setLoading] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault();

        const templateParams = {
            nombre,
            email,
            telefono,
            mensaje
        };
        setLoading(true)

        emailjs.send('service_pq131eq', 'template_0thietb', templateParams, 'XjMquqg7KQ908ur2Z')
            .then((response) => {
                console.log('Correo enviado con éxito:', response);
                setLoading(false)
                Swal.fire({
                    title: '¡Enviado!',
                    text: 'El formulario se envió correctamente.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    customClass: {
                        title: 'my-custom-title',
                        text: 'my-custom-content'
                      }
                  });
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
                    <input value={telefono} onChange={(event) => handleChange(event, setTelefono)} placeholder='Telefono' type='number' />

                    <textarea value={mensaje} onChange={(event) => handleChange(event, setMensaje)} placeholder='Mensaje' />
                    <div className='form__botonLoading'>
                        <BotonPedirCita text={"Enviar mensaje"} />
                        <div className={loading ? "form__botonLoading__loadingTrue" : "form__botonLoading__loading"}>
                        <Loading />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SeccionAtencionCliente;
