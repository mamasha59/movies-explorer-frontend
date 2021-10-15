import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import './Login.css';
import Preloader from '../Preloader/Preloader';
import { useFormWithValidation } from '../../validation/validation';

function Login({handleLogin,isLoading}) {

  const { values, handleChange, errors, isValid} = useFormWithValidation();

  const { email, password } = values;

  function handleSubmit(evt){
    evt.preventDefault()
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
        isValid
       >
      {isLoading && <div className="authform__loader"><Preloader /></div>}
      <div className="authform__wraper">
        <label className="authform__data" >E-mail</label>
        <input 
          className='authform__email authform-input'
          type='email'
          name='email'
          minLength="2"
          maxLength="30"
          value={email || ''}
          onChange={handleChange} 
          required
        />
        <span className='authform__error'>{errors.email}</span>
      </div>
      <div className="authform__wraper">
        <label className="authform__data" >Пароль</label>
        <input 
          className='authform__email authform-input'
          type='password'
          name='password'
          minLength="2"
          maxLength="30"
          value={password || ''}
          onChange={handleChange} 
          required
        />
        <span className='authform__error'>{errors.password}</span>
      </div>
      <button
      className={`${isValid ? "profile__edit-button_active" : "profile__edit-button_inactive"} authform__enter`}
      disabled={`${isValid ? "" : "disabled"}`} 
      type='submit'>
      Войти
    </button>
      </AuthForm>
  );
}

export default Login;
