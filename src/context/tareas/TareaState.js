import React, { useReducer } from 'react'
import {tareaReducers} from './tareaReducers'
import  TareaContext  from './TareaContext'

const TareaState = props => {

    const initialState = {
        tareas : [
            { proyectoId: 1, nombre: 'Elegir Plataforma', estado: true},
            { proyectoId: 2, nombre: 'Elegir Colores', estado: false},
            { proyectoId: 3, nombre: 'Elegir Plataforma de Pagos', estado: false},
            { proyectoId: 4, nombre: 'Elegir Hosting', estado: true},
            { proyectoId: 1, nombre: 'Elegir Plataforma', estado: true},
            { proyectoId: 2, nombre: 'Elegir Colores', estado: false},
            { proyectoId: 3, nombre: 'Elegir Plataforma de Pagos', estado: false},
            { proyectoId: 4, nombre: 'Elegir Hosting', estado: true},
            { proyectoId: 1, nombre: 'Elegir Plataforma', estado: true},
            { proyectoId: 2, nombre: 'Elegir Colores', estado: false},
            { proyectoId: 3, nombre: 'Elegir Plataforma de Pagos', estado: false},
            { proyectoId: 4, nombre: 'Elegir Hosting', estado: true},
        ]
    }

    const [state, dispatch] = useReducer(tareaReducers , initialState)
    return(
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}
export default TareaState
