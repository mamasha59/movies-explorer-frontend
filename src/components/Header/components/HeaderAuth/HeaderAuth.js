import './HeaderAuth.css'
import { Link } from "react-router-dom";
import logo from '../../../../images/logo.svg'
import accountIcon from '../../../../images/accountIcon.svg'
import burgerIcon from '../../../../images/burgerIcon.svg'
import BurgerMenu from '../../../BurgerMenu/BurgerMenu';
function HeaderAuth(){
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
            <Link to='#' className='nav__burger'><img src={burgerIcon} alt='бурегр иконка'/></Link>
            <BurgerMenu/>
     </header>
    );
}
export default HeaderAuth;