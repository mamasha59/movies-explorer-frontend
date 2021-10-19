import './HeaderAuth.css';
import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../../../images/logo.svg'
import accountIcon from '../../../../images/accountIcon.svg'
import burgerIcon from '../../../../images/burgerIcon.svg'
import BurgerMenu from '../../../BurgerMenu/BurgerMenu';

function HeaderAuth(){
    const [ menuActive, setMenuActive ] = useState(false);
    const onCloseNavClick = () => setMenuActive(false);
    const onBurgerClick = () => setMenuActive(!menuActive);
    return(
     <header className='nav-auth'>
            <div className='nav-auth__box'>
                <Link className='nav-auth__logo' to='/'> <img src={logo} alt='лого-ссылка'/></Link>
                <div className='nav-auth__links'>
                    <Link className='nav-auth__link nav-signup' to='/movies'>Фильмы</Link>
                    <Link className='nav-auth__link nav-signin' to='/saved-movies'>Сохранённые фильмы</Link>
                </div>
            </div>
            <Link className='nav-auth__account' to='/profile'>Аккаунт  <img src={accountIcon} className='nav-auth__account-img' alt='иконка аккаунта'/></Link>
            <button className='nav__burger' onClick={onBurgerClick}> <img src={burgerIcon} alt='бурегр иконка'/> </button>
            <BurgerMenu active={menuActive} setActive={setMenuActive} close={onCloseNavClick}/>
     </header>
    );
}
export default HeaderAuth;