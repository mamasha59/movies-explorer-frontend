import './Profile.css';
import HeaderAuth from '../Header/components/HeaderAuth/HeaderAuth';

function Profile() {
  return (
    <>
    <section className='common-container additional-option '>
    <HeaderAuth/>
       <h1 className='profile__title'>Привет, Виталий!</h1>
         <form className='profile__form'>
                    <label className='profile__data'>Имя
                        <input className='profile__input' type='name' name='name' placeholder='имя'/>
                    </label>
                    <label className='profile__data'>E-mail
                        <input className='profile__input' type='email' name='email'placeholder='email'/>
                    </label>
            <button className='profile__button profile__button_type_submit'>Редактировать</button>
            <button className='profile__button profile__button_type_submit profile__buttons_red'>Выйти из аккаунта</button>
         </form>
    </section>
    </> 
  );
}

export default Profile;
