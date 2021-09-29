import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import Input from "../Input/Input";
import './Login.css';
import Preloader from '../Preloader/Preloader';
function Login({handleLogin,isLoading}) {

  const [valueEmail, setValueEmail] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');

  function handleChangeEmail(e) {
    setValueEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setValuePassword(e.target.value);
  }

  function handleSubmit(evt){
    evt.preventDefault()
    const email = valueEmail;
    const password = valuePassword;
    handleLogin(email,password);
  }
  return (
       <AuthForm
        name='login'
        clue='Ещё не зарегистрированы?'
        linkTo='/signup'
        linkText='Регистрация'
        linkSubTo='Войти'
        title='Рады видеть!'
        onSubmit={handleSubmit}
       >
      
      {isLoading && <div className="authform__loader"><Preloader /></div>}
      
      <Input 
       placeholder='E-mail'
       type='email'
       name='email'
       minLength="2"
       maxLength="30"
       value={valueEmail}
       onChange={handleChangeEmail} 
       required
      />
      <Input 
       placeholder='Пароль'
       type='password'
       name='password'
       minLength="2"
       maxLength="30"
       value={valuePassword}
       onChange={handleChangePassword} 
       required
      />
       </AuthForm>
  );
}

export default Login;
