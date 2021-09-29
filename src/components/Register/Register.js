import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import Input from "../Input/Input";
import './Register.css';
import Preloader from "../Preloader/Preloader";
function Register({handleRegister,isLoading}) {

  const [valueEmail, setValueEmail] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');
  const [valueName, setValuName] = React.useState('');

  const handleChangeEmail = (e) => {setValueEmail(e.target.value)}
  const handleChangePassword = (e) => {setValuePassword(e.target.value)}
  const handleChangeName = (e) => {setValuName(e.target.value)}

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const email = valueEmail;
    const password = valuePassword;
    const name = valueName;
    handleRegister(email, password, name);
  }

  return (
    <AuthForm
    name='register'
    clue='Уже зарегистрированы?'
    linkTo='/signin'
    linkText='Войти'
    linkSubTo='Зарегистрироваться'
    title='Добро пожаловать!'
    onSubmit={handleSubmit}
    >
      {isLoading && <div className="authform__loader"><Preloader /></div>}
    <Input 
       placeholder='Имя'
       type='text'
       name='name'
       minLength="2"
       maxLength="30"
       value = {valueName}
       onChange={handleChangeName}
       required
       autoComplete="off"
    />
      <Input 
       placeholder='E-mail'
       onChange={handleChangeEmail} 
       required
       type='email'
       name='name'
       minLength="2"
       maxLength="30"
       value = {valueEmail}
    />
      <Input 
       placeholder='Пароль'
       onChange={handleChangePassword} 
       required
       type='password'
       name='Пароль'
       minLength="4"
       maxLength="30"
       value = {valuePassword}
    />
   </AuthForm>
  );
}

export default Register;