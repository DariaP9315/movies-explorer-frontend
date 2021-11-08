import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

class SearchForm extends React.Component {

  render() {
    return (
      <section className="search">
        <form className="search__container">
            <input type="search" id="site-search" name="site-search" placeholder="Фильм" className="search__input" />
            <button type="submit" value="" className="search__submit" /></form>
            <FilterCheckbox />
      </section>
    );
  }
}

export default SearchForm;
