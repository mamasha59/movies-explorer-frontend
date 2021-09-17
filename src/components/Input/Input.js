import './Input.css';

function Input({ name, type, placeholder, minLength, maxLength}) {
  return (
    <div className="authform__wraper">
      <label className="authform__data" >{placeholder}</label>
      <input className='authform__email authform-input' type={type} name={name} 
        placeholder={placeholder} required minLength={minLength} maxLength={maxLength}/>
       <span className='authform__error'>здесь будет ошибка валидации</span> 
    </div>
  )
}

export default Input;