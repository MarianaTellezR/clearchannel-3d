import React from 'react';
import Logo from '../assets/images/logo.png';
// import Search from '../assets/images/search.png';

function Nav() {
    return ( 
    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <ul className='list-styled'>
                <li className='logo'>
                    <img src={Logo} alt="ClearChannel" width={160}/>
                </li>
                <li>
                    <a className='link-styled'>Productos</a>
                </li>
                <li>
                    <a className='link-styled'>Servicios</a>
                </li>
                <li>
                    <a className='link-styled'>Nosotros</a>
                </li>
                <li>
                    <a className='link-styled'>Casos de Éxito</a>
                </li>
                <li>
                    <a className='link-styled'>Noticias</a>
                </li>
                <li>
                    <a className='link-styled'>Términos y condiciones</a>
                </li>
                <li>
                    <a className='link-styled'>Aviso Privacidad</a>
                </li>
                <li>
                    <a className='link-styled'>Línea de Denuncia</a>
                </li>
                
            </ul>
        </div>
    </nav> 
    );
}

export default Nav;

