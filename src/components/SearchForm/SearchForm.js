import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
function SearchForm() {
  return (
    <section className='search-form'>
        <div className='search-form__box'>
                <form className='search-form__line'>
                    <input className='seacrh__form__search' type='search' placeholder='Фильм'/>
                    <button className='search-form__find'>Найти</button>
                </form>
                <div className='search-form__check'>
                    <FilterCheckbox/>
                    <label className='search-form__togle-name'>Короткометражки</label>
                </div>
        </div>
    </section>
  );
}

export default SearchForm;
