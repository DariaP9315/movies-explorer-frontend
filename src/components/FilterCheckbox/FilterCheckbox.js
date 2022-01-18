import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <div className="filter-checkbox">
      <input
        className="filter-checkbox__switcher"
        type="checkbox"
        onChange={props.handleCheckBox}
        checked={props.shortMovies}
      />
      <p className="filter__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;

