import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({onSubmit,isShortMovies,setIsShortMovies}) {

const inputElement = React.useRef(null);

 const handleSubmitFind = (e)=> {
    e.preventDefault()
    onSubmit(inputElement.current.value)
  }
  return (
    <section className='search-form'>
        <div className='search-form__box'>
                <form className='search-form__line' onSubmit={handleSubmitFind}>
                    <input
                    className='seacrh__form__search'
                    type='search'
                    placeholder='Фильм'
                    required
                    ref={inputElement}
                    />
                    <button type='submit' className='search-form__find'>Найти</button>
                </form>
                <div className='search-form__check'>
                    <FilterCheckbox
                      isShortMovies={isShortMovies}
                      setIsShortMovies={setIsShortMovies}/>
                    <label className='search-form__togle-name'>Короткометражки</label>
                </div>
        </div>
    </section>
  );
}

export default SearchForm;
