import React, { useContext, useState } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';

export const NuevoProyecto = () => {

    const proyectosContext = useContext(proyectoContext);

    const { formulario, mostrarFormulario, agregarProyectos, 
    mostrarError, errorFormulario} = proyectosContext;
    
    console.log(formulario)
    
    const [proyecto, setProyecto] = useState({
        nombre: ''
    })

    const { nombre } = proyecto;

    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }
    

    const onSubmitProyecto = e => {
        e.preventDefault()
        if( nombre === ''){
            mostrarError();
            return;
        } 
        agregarProyectos(proyecto)
        setProyecto({ 
            nombre: ''
        })
    }

    const onFormulario =()=> {
        mostrarFormulario()

        
    }
    return (
        <>
            <button onClick={ onFormulario }
            type="button" className="btn btn-primario btn-block"
            >
                Nuevo Proyecto
            </button>
            {
                formulario ?
                (
                    <form onSubmit={onSubmitProyecto} className="formulario-nuevo-proyecto">
                    <input type='text' className="input-text" placeholder="Nombre del Proyecto"
                    name="nombre" onChange={onChangeProyecto} value={nombre}
                    />
                    <input type="submit" 
                    className="btn btn-primario btn-block" value='Agregar Proyecto'
                    />
                    </form>
                ):null
            }
            {
                errorFormulario ? 
                (
                    <p className="error mensaje">El nombre del Proyecto es Obligatorio</p>
                ):null
            }
        </>
    )
}
