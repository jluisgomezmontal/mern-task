import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'

export const Proyecto = ({proyecto}) => {
    const proyectosContext = useContext(proyectoContext)

    const{ proyectoActual }=proyectosContext;

    
    return (
        <li>
           <button onClick={()=>proyectoActual(proyecto.id)} className="btn btn-blank">
               {proyecto.nombre}
            </button> 
        </li>
    )
}
