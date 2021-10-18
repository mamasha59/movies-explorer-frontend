import './Profile.css';
import React from 'react';
import HeaderAuth from '../Header/components/HeaderAuth/HeaderAuth';
import { CurrentUserContext } from '../../context/userContext';
import Preloader from '../Preloader/Preloader';
import { useFormWithValidation } from '../../validation/validation';

function Profile({handleUpdateUser,onSignOut,isLoading}) {

  const currentUser = React.useContext(CurrentUserContext);
  const { values, setValues, handleChange, errors, isValid } =
    useFormWithValidation();
  const { name, email } = values;

  const handleSubmitUpdateProfile = (evt) => {
    evt.preventDefault();
    if (currentUser.name !== name || currentUser.email !== email) {
      handleUpdateUser({ name, email });
    }
  };

  React.useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [setValues, currentUser]);

  return (
    <section className='common-container additional-option '>
    <HeaderAuth/>
       <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
         <form className='profile__form' onSubmit={handleSubmitUpdateProfile}>
                    <label className='profile__data'>Имя
                        <input  className='profile__input'
                                value={values.name || ""}
                                type='text'
                                name='name'
                                placeholder='имя'
                                onChange={handleChange}
                                required
                                autoComplete='off'
                                minLength="2"
                                maxLength="40"
                        />
                        <span className="profile__error" id="name-error">{errors.name}</span>
                        {isLoading && <div className='profile__loader'><Preloader /></div>}
                    </label>
                    <label className='profile__data'>E-mail
                        <input  className='profile__input'
                                value={values.email || ""}
                                type='email'
                                name='email'
                                placeholder='email'
                                onChange={handleChange}
                                required
                                autoComplete='off'
                                minLength="2"
                                maxLength="40"
                        />
                        <span className="profile__error" id="email-error">{errors.email}</span>
                    </label>
                            
            <button className={`profile__button_type_submit profile__button ${!isValid && "profile__edit-button-inactive"}`} disabled={!isValid && true} type='submit'>Редактировать</button>
            <button className='profile__button_type_submit profile__button profile__buttons_red' onClick={onSignOut} type='submit'>Выйти из аккаунта</button>
         </form>
    </section>
  );
}

export default Profile;