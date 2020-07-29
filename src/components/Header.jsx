import React from 'react';
import '../assets/styles/components/Header.scss';
import UserIcon from '../assets/static/user-icon.png';
import logo from '../assets/static/logo-platzi-video-BW2.png';

const Header = () => (
  <header className='header'>
    <img
      className='header__img'
      src={logo}
      alt='Platzi Video'
    />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={UserIcon} alt='' />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href='/o'>Cuenta</a>
        </li>
        <li>
          <a href='/'>Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
