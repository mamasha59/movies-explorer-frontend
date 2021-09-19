import { Link } from "react-router-dom";
import './AuthForm.css';
import logo from '../../images/logo.svg';

function AuthForm({linkText, linkTo, linkSubTo, title, clue, name, ...props}) {
  return (
    <section className='authform'>
       <div className='authform__container'>
           <Link className='authform__logo' to='/'><img src={logo} alt='ссылка на главну страницу'/></Link>
           <h2 className='authform__title'>{title}</h2>
           
           <form className='authform__form' action='post' name={name}>
              <div className='authform__frame'>  {props.children} </div> 
              <div className='authform__rule'>
                  <button className='authform__enter'>{linkSubTo}</button>
                  <div className='authform__clue'>{clue} <Link className='authform__singup' to={linkTo}>{linkText}</Link></div>
              </div>
            </form>

       </div>
    </section>
  );
}

export default AuthForm;
