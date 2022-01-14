import React from 'react'

export const Tarea = ({ tarea }) => {
    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {
                    tarea.estado === true 
                    ?
                    (<button className="completo" type='button'>
                        Completo
                    </button>)
                    :
                    (<button className="incompleto" type='button'>
                    Incompleto
                    </button>)

                }
            </div>
            <div className="acciones">
                <button type="button" className="btn btn-primario">
                    Editar
                </button>
                <button type="button" className="btn btn-secundario">
                    Eliminar
                </button>
            </div>
        </li>
    )
}
