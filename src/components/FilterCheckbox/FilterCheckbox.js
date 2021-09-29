/* eslint-disable react/jsx-no-duplicate-props */
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="checkbox">  
        <input type="checkbox" value="None" id="filter" name="check" className="checkbox__input" />
        <label htmlFor="filter" className="checkbox__label"></label>
   </div>
  );
}

export default FilterCheckbox;
