import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Login = () => {

    const [usuario, setUsuario] = useState({
        email: '',
        password: '',
    })
    
    const { email, password } = usuario;
    
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
        <div className='formUsuario'>
            <div className="contenedor-form sombra-dark" >
                <h1>Iniciar Sesion</h1>
                <form
                onSubmit={handleSubmit}
                >
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
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesion"
                        />
                    </div>
                </form>
                <Link to="/nueva-cuenta" className="enlace-cuenta">
                    Crear Cuenta
                </Link>
            </div>
        </div>
    )
}
