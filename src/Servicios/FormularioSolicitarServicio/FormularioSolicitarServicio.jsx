import React, { useState } from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Loading from '../../Home/Secciones/SeccionAtencionCliente/Loading/Loading';
import BotonPedirCita from '../../components/BotonPedirCita/BotonPedirCita';
import TextoCeleste from '../../components/TextoCeleste/TextoCeleste';
import '../FormularioSolicitarServicio/formularioSolicitarServicio.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ClearIcon from '@mui/icons-material/Clear';
import emailjs from 'emailjs-com';


const FormularioSolicitarServicios = () => {
    const sendEmail = (objeto) => {
        const serviceId = 'service_pq131eq';
        const templateId = 'template_zmi51hx';
        const userId = 'XjMquqg7KQ908ur2Z';

        emailjs.send(serviceId, templateId, objeto, userId)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (error) => {
                console.log('FAILED...', error);
            });
    };
    return (
        <div className="FormularioSolicitarServicios">
            <Formik
                initialValues={{
                    fecha: null,
                    hora: 'opcion1',
                    servicio: '',
                    animales: [],
                    nombre: '',
                    email: '',
                    repetirEmail: '',
                    whatsapp: '',
                    comentarios: '',
                    animalDefectNombre: "",
                    animalDefectRaza: "",
                    animalDefectOption: "",
                }}
                onSubmit={(values) => {
                    const objeto = {
                        fecha: values.fecha,
                        hora: values.hora,
                        servicio: values.servicio,
                        animales: [...values.animales, {
                          nombre:  values.animalDefectNombre,
                          raza:  values.animalDefectRaza,
                          sexo:  values.animalDefectOption,
                        }],
                        nombre: values.nombre,
                        email: values.email,
                        whatsapp: values.whatsapp,
                        comentarios: values.comentarios
                    };
                    console.log('Form values', objeto);
                    sendEmail(objeto)
                }}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <div className='form__fecha'>
                            <h1>Fecha</h1>
                            <div className='form__fecha__calendario'>
                                <DatePicker
                                    selected={values.fecha}
                                    onChange={(date) => setFieldValue('fecha', date)}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="Selecciona una fecha"
                                    className='form__input__fecha'
                                />
                                <Field as="select" name="hora" className='form__input__select'>
                                    <option value="Mañana">Mañana</option>
                                    <option value="Tarde">Tarde</option>
                                </Field>
                            </div>
                        </div>
                        <div className='form__servicios'>
                            <h1>Servicios</h1>
                            <Field as="textarea" name="servicio" placeholder="Servicio" />
                        </div>
                        <div className='form__animales'>
                            <h1>Animales</h1>
                            <div className='form__input' >
                                                <Field name="animalDefectNombre" placeholder="Nombre" />
                                                <Field name="animalDefectRaza"placeholder="Raza" />
                                                <Field as="select" name="animalDefectOption" className='form__input__select'>
                                                    <option value="Macho">Macho</option>
                                                    <option value="Hembra">Hembra</option>
                                                </Field>
                                                </div>
                            <FieldArray name="animales">
                                {({ push, remove }) => (
                                    <>
                                        <div className='botonAddAnimal' onClick={() => push({ nombre: '', raza: '', sexo: 'opcion1' })}>
                                            <AddCircleOutlineIcon />
                                        </div>
                                        {values.animales.map((animal, index) => (
                                            <div className='form__input' key={index}>
                                                <Field name={`animales.${index}.nombre`} placeholder="Nombre" />
                                                <Field name={`animales.${index}.raza`} placeholder="Raza" />
                                                <Field as="select" name={`animales.${index}.sexo`} className='form__input__select'>
                                                    <option value="Macho">Macho</option>
                                                    <option value="Hembra">Hembra</option>
                                                </Field>
                                                <div onClick={() => remove(index)} className='container__botonClear'>
                                                    <ClearIcon className='botonClear' />
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </FieldArray>
                        </div>
                        <div className='form__informacion'>
                            <h1>Información</h1>
                            <Field name="nombre" placeholder="Nombre y apellidos" />
                            <Field name="email" placeholder="Email" type="email" />
                            <Field name="repetirEmail" placeholder="Repetir email" type="email" />
                            <Field name="whatsapp" placeholder="Whatsapp" />
                            <Field  as="textarea" name="comentarios" placeholder="Comentarios" className='input__textArea' />
                        </div>
                        <div className='formularioSolicitarServicios__boton'>
                            <button type="submit">Enviar mensaje</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FormularioSolicitarServicios;
