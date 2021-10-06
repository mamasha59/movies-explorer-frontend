import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import './Register.css';
import Preloader from "../Preloader/Preloader";
import { useFormWithValidation } from '../../validation/validation';

function Register({handleRegister,isLoading}) {

  const { values, handleChange, errors, isValid} = useFormWithValidation();
  
  const { name, email, password } = values;

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if(isValid){
       handleRegister(email, password, name);
    }
  }

  return (
    <AuthForm
      name='register'
      clue='Уже зарегистрированы?'
      linkTo='/signin'
      linkText='Войти'
      title='Добро пожаловать!'
      onSubmit={handleSubmit}
      noValidate
    >
    {isLoading && <div className="authform__loader"><Preloader /></div>}
    <div className="authform__wraper">
    <label className="authform__data" >Имя</label>
      <input
        className='authform__email authform-input'
        type='text'
        name='name'
        minLength="2"
        maxLength="30"
        value = {name || ''}
        onChange={handleChange}
        required
        autoComplete="off"
      />
      <span className='authform__error'>{errors.name}</span>
    </div>
     <div className="authform__wraper">
      <label className="authform__data" >E-mail</label>
          <input
            className='authform__email authform-input'
            onChange={handleChange} 
            required
            type='email'
            name='email'
            minLength="2"
            maxLength="30"
            value = {email || ''}
          />
        <span className='authform__error'>{errors.email}</span>
    </div>
      <div className="authform__wraper">
        <label className="authform__data" >Пароль</label>
        <input 
          className='authform__email authform-input'
          onChange={handleChange}
          required
          type='password'
          name='password'
          minLength="4"
          maxLength="30"
          value = {password || ''}
        />
      <span className='authform__error'>{errors.password}</span>
     </div>
     <button
      className={`${isValid ? "profile__edit-button_active" : "profile__edit-button_inactive"} authform__enter`}
      disabled={`${isValid ? "" : "disabled"}`} 
      type='submit'>
      Зарегистрироваться
    </button>
   </AuthForm>
  );
}

export default Register;