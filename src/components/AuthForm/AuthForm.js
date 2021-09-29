import { Link } from "react-router-dom";
import './AuthForm.css';
import logo from '../../images/logo.svg';

function AuthForm({linkText, linkTo, linkSubTo, title, clue, name, onSubmit, ...props}) {

  return (
    <section className='authform'>
       <div className='authform__container'>
           <Link className='authform__logo' to='/'><img src={logo} alt='ссылка на главну страницу'/></Link>
           <h2 className='authform__title'>{title}</h2>
           
           <form className='authform__form' name={name} onSubmit={onSubmit}> 
              {props.children} 
              <div className='authform__rule'>
                  <button type='submit' className='authform__enter'>{linkSubTo}</button>
                  <div className='authform__clue'>{clue} <Link className='authform__singup' to={linkTo}>{linkText}</Link> </div>
              </div>
            </form>

       </div>
    </section>
  );
}

export default AuthForm;
