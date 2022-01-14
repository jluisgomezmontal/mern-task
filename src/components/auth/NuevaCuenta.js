import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const NuevaCuenta = () => {

    const [usuario, setUsuario] = useState({

        name: '',
        email: '',
        password: '',
        confirmar: '',
    })
    
    const { name, email, password, confirmar } = usuario;
    
    const handleInputChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div className="formUsuario">
            <div className="contenedor-form sombra-dark" >
                <h1>Ontener Cuenta</h1>
                <form
                onSubmit={handleSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" name='nombre' placeholder="Tu Nombre" 
                        onChange={handleInputChange} value={name}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name='email' placeholder="Tu Email" 
                        onChange={handleInputChange} value={email}
                        />
                    </div>
                
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name='password' placeholder="Tu Password" value={password}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input type="password" id="confirmar" name='confirmar' placeholder="Confirma tu Password" value={confirmar}
                        onChange={handleInputChange}
                        />
                    </div>
          
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrar"
                        />
                    </div>
                </form>
                <Link to="/" className="enlace-cuenta">
                    Iniciar Sesion
                </Link>
            </div>
        </div>
    )
}
