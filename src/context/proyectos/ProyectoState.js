import React, { useReducer } from 'react'
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO,VALIDAR_FORMULARIO, PROYECTO_ACTUAL, ELIMINAR_PROYECTO } from '../../types';
import  proyectoContext  from './proyectoContext';
import proyectoReducer from './proyectoReducer'
import { v4 as uuidv4 } from 'uuid';

const ProyectoState = props => {

    const proyectos =[
        { id: 1, nombre: 'tienda virtual'},
        { id: 2, nombre: 'Intranet'},
        { id: 3, nombre: 'Diseño de sitio web'},
        { id: 4, nombre: 'MERN'},
    ]
    
    const initialState = {
        proyectos : [

        ],
        formulario: false,
        errorFormulario: false,
        proyecto: null,
    }

    const [state, dispatch] = useReducer( proyectoReducer , initialState );

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        });
    }
    
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }
    const agregarProyectos = proyecto => {
        proyecto.id = uuidv4();

        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        });

    }
    
    const mostrarError=() => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId,
        })
    }
    
    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos, 
                formulario: state.formulario,
                errorFormulario: state.errorFormulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyectos,
                mostrarError,
                proyectoActual,
                eliminarProyecto,
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )

}

export default ProyectoState;