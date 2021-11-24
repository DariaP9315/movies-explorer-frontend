import { useState, useEffect } from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css';

function SearchForm({ shortMovies, handleCheckBox, searchSubmit }) {
  const [keyword, setKeyword] = useState('');
  const [isRequired, setIsRequired] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (error === '') {
      setIsRequired(false);
    }
  }, [error, keyword]);

  function handleKeyword(evt) {
    setError('');
    setKeyword(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (keyword === '') {
      setIsRequired(true);
      setError('Нужно ввести ключевое слово');
    } else {
      searchSubmit(keyword);
    }
  };
    return (
      <section className="search">
        <form className="search__container" noValidate onSubmit={handleSubmit}>
        <input
            className="search__input"
            type="search"
            value={keyword}
            placeholder="Фильм"
            onChange={handleKeyword}
            required
          />
            <button type="submit" value="" className="search__submit" /></form>
            <FilterCheckbox shortMovies={shortMovies} handleCheckBox={handleCheckBox}/>
      </section>
    );
  }

export default SearchForm;
