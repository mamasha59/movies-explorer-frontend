import './Profile.css';
import React from 'react';
import HeaderAuth from '../Header/components/HeaderAuth/HeaderAuth';
import { CurrentUserContext } from '../../context/userContext';
import Preloader from '../Preloader/Preloader';
import { useFormWithValidation } from '../../validation/validation';

function Profile({handleUpdateUser,onSignOut,isLoading}) {
  const formValidation = useFormWithValidation();
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.data.name);
  const [email, setEmail] = React.useState(currentUser.data.email);

  React.useEffect(() => {
      setEmail(formValidation.values.email);
      setName(formValidation.values.name);
  }, [formValidation]);
  
  function onSubmit (e){
    e.preventDefault()
    handleUpdateUser({
      name,email
    })
  }
  const isNotEdit = formValidation.values.name === currentUser.data.name && formValidation.values.email === currentUser.data.email;

  return (
    <section className='common-container additional-option '>
    <HeaderAuth/>
       <h1 className='profile__title'>Привет, {currentUser.data.name}!</h1>
         <form className='profile__form' onSubmit={onSubmit}>
                    <label className='profile__data'>Имя
                        <input  className='profile__input'
                                defaultValue={name || ''}
                                type='text'
                                name='name'
                                placeholder='имя'
                                onChange={formValidation.handleChange}
                                required
                                autoComplete='off'
                                minLength="2"
                                maxLength="40"
                        />
                        <span className="profile__error" id="name-error">{formValidation.errors.name}</span>
                        {isLoading && <div className='profile__loader'><Preloader /></div>}
                    </label>
                    <label className='profile__data'>E-mail
                        <input  className='profile__input'
                                defaultValue={email || ''} 
                                type='email'
                                name='email'
                                placeholder='email'
                                onChange={formValidation.handleChange}
                                required
                                autoComplete='off'
                                minLength="2"
                                maxLength="40"
                        />
                        <span className="profile__error" id="email-error">{formValidation.errors.email}</span>
                    </label>
                            
            <button className={`${formValidation.isValid && !isNotEdit ? "profile__edit-button_active" : "profile__edit-button_inactive"} profile__button profile__button_type_submit` } disabled={`${formValidation.isValid ? "" : "disabled"}`} type='submit'>Редактировать</button>
            <button className='profile__button profile__button_type_submit profile__buttons_red' onClick={onSignOut} type='submit'>Выйти из аккаунта</button>
         </form>
    </section>
  );
}

export default Profile;