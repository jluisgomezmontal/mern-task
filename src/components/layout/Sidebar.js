import React from 'react'
import { Listado } from '../proyectos/Listado'
import { NuevoProyecto } from '../proyectos/NuevoProyecto'

export const Sidebar = () => {
    return (
        <aside>
            <h1>Mern<span>Tasks</span></h1>
            <NuevoProyecto/>
            <div className="proyectos">
                <h2>Tus Proyectos</h2>
                <Listado/>
            </div>
        </aside>
    )
}
