import {Link, NavLink} from 'react-router-dom';
import accountIcon from '../../images/accountIcon.svg';

import './BurgerMenu.css';
function BurgerMenu(){
    return(
     <section className='burger'>
           <button className='burger__close'></button>
           <ul className='burger__list'>
               <NavLink className='burger__link' to='/'>Главная</NavLink>
               <NavLink className='burger__link' to='/movies'>Фильмы</NavLink>
               <NavLink className='burger__link' to='/saved-movies'>Сохранённые фильмы</NavLink>
           </ul>
           <Link className='burger__account' to='/profile'>Аккаунт <img src={accountIcon} className='nav-auth__account-img' alt='иконка аккаунта'/></Link>
     </section>
    );
}
export default BurgerMenu;