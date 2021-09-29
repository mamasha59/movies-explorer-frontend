import {Link, NavLink} from 'react-router-dom';
import accountIcon from '../../images/accountIcon.svg';
import './BurgerMenu.css';

function BurgerMenu({active,close,setActive}){
    return(
     <section className={ active ? 'burger burger-shov' : 'burger' } >
           <button className='burger__close' onClick={close}></button>
               <NavLink activeClassName='burger__link_active' className='burger__link' exact to='/'>Главная</NavLink>
               <NavLink activeClassName='burger__link_active' className='burger__link' to='/movies'>Фильмы</NavLink>
               <NavLink activeClassName='burger__link_active' className='burger__link' to='/saved-movies'>Сохранённые фильмы</NavLink>
           <Link className='burger__account' to='/profile'>Аккаунт <img src={accountIcon} className='nav-auth__account-img' alt='иконка аккаунта'/></Link>
     </section>
    );
}
export default BurgerMenu;