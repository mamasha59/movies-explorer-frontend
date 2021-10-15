/* eslint-disable react/jsx-no-duplicate-props */
import './FilterCheckbox.css';

function FilterCheckbox({ setIsShortMovies, isShortMovies }) {
  return (
    <div className="checkbox">
      <input type="checkbox"
        value="None"
        id="filter"
        name="check"
        className="checkbox__input"
        onClick={() => {
          setIsShortMovies(!isShortMovies);
        }} />
      <label htmlFor="filter" className="checkbox__label"></label>
    </div>
  );
}

export default FilterCheckbox;
