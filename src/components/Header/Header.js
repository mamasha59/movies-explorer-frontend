import './Header.css'
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg'
function Header({loggedIn}){
    console.log(loggedIn)
    return(
     <header className='nav'>
         <div className='nav__container common-container'>
             <Link className='nav__logo' to='/'> <img src={logo} alt='лого-ссылка'/></Link>
             <div className='nav__links'>

            {!loggedIn ? (
                <>
                    <Link className='nav__link nav-signup' to='/signup'>Регистрация</Link>
                    <Link className='nav__link nav-signin' to='/signin'>Войти</Link>
                </>
                ) : ("")}
            
             {/* шапка сайта для авторизованного пользователя   */}
            {loggedIn ? (
                <>
                <Link to='/movies' className='auth-title'> Профиль&#8594;</Link>
                </>
                ) : ("")}
             </div>
         </div>
     </header>
    );
}
export default Header;