import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import { Tarea } from './Tarea'

export const ListadoTareas = () => {

    const proyectosContext = useContext(proyectoContext)
    const {proyecto, eliminarProyecto} = proyectosContext;

    if (!proyecto) return <h2>Seleccione un Proyecto</h2>
    
    const [proyectoActual]=proyecto;
    const tareasProyecto = []
    
    return (
        <div>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0 ?
                    (
                        <li className="tarea">
                            <p>No hay Tareas</p>
                        </li>
                    ):
                    tareasProyecto.map( tarea =>(
                        <Tarea
                            tarea={tarea}
                        />
                    ))

                }
            </ul>
            <button onClick={() => eliminarProyecto(proyectoActual.id)}
            className="btn btn-eliminar" type="button"
            >Eliminar</button>
        </div>
    )
}
