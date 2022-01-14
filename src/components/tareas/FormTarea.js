import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'

export const FormTarea = () => {
    const proyectosContext = useContext(proyectoContext)
    const {proyecto}=proyectosContext;

    if (!proyecto)return null;    

    return (
        <div className="formulario">
            <form action="">
                <div className="contenedor-input">
                    <input type="text" 
                    className="input-text"
                    placeholder="Nombre de la Tarea"
                    name="nombre"
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                    type="submit" 
                    value="Agregar Tarea"
                    className="btn btn-primario btn-submit btn-block"
                    />
                </div>
            </form> 
        </div>
    )
}
