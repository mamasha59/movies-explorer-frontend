import AuthForm from "../AuthForm/AuthForm";
import Input from "../Input/Input";
import './Login.css';

function Login() {
  return (
       <AuthForm
        name='login'
        clue='Ещё не зарегистрированы?'
        linkTo='/signup'
        linkText='Регистрация'
        linkSubTo='Войти'
        title='Рады видеть!'
       >
      <Input 
       placeholder='E-mail'
       type='email'
       name='email'
       minLength="2"
       maxLength="30"
      />
      <Input 
       placeholder='Пароль'
       type='password'
       name='password'
       minLength="2"
       maxLength="30"
      />
       </AuthForm>
  );
}

export default Login;
