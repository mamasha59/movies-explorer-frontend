import './Input.css';

function Input(props) {
  return (
    <div className="authform__wraper">
      <label className="authform__data" >{props.placeholder}</label>
      <input className='authform__email authform-input'  {...props}/>
      <span className='authform__error'>здесь будет ошибка валидации</span> 
    </div>
  )
}

export default Input;