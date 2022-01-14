import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Login } from './components/auth/Login'
import { NuevaCuenta } from './components/auth/NuevaCuenta'
import { Proyectos } from './components/proyectos/Proyectos'
import ProyectoState from './context/proyectos/ProyectoState'
import TareaState  from './context/tareas/TareaState'

export const TaskApp = () => {
    return (
        <ProyectoState>
            <TareaState>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Login/>}></Route>
                        <Route exact path="/nueva-cuenta" element={<NuevaCuenta/>}></Route>
                        <Route exact path="/proyectos" element={<Proyectos/>} ></Route>
                    </Routes>
                </BrowserRouter>
            </TareaState>
        </ProyectoState>
    )
}
