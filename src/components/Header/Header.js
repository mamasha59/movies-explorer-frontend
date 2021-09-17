import './Header.css'
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg'
function Header(){
    return(
     <header className='nav'>
         <div className='nav__container common-container'>
             <Link className='nav__logo' to='/'> <img src={logo} alt='лого-ссылка'/></Link>
             <div className='nav__links'>
                <Link className='nav__link nav-signup' to='/signup'>Регистрация</Link>
                <Link className='nav__link nav-signin' to='/signin'>Войти</Link>
             </div>
         </div>
     </header>
    );
}
export default Header;