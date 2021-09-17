import AuthForm from "../AuthForm/AuthForm";
import Input from "../Input/Input";
import './Register.css';
function Register() {
  return (
    <AuthForm
    name='register'
    clue='Уже зарегистрированы?'
    linkTo='/signin'
    linkText='Войти'
    linkSubTo='Зарегистрироваться'
    title='Добро пожаловать!'
    >
    <Input 
       placeholder='Имя'
       type='text'
       name='name'
       minLength="2"
       maxLength="30"
    />
      <Input 
       placeholder='E-mail'
       type='email'
       name='name'
       minLength="2"
       maxLength="30"
    />
      <Input 
       placeholder='Пароль'
       type='password'
       name='Пароль'
       minLength="2"
       maxLength="30"
    />
   </AuthForm>
  );
}

export default Register;