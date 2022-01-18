import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import { convertMinutesToHours } from '../../utils/convertFucn';
import { IMG_URL } from '../../utils/constants';

import './MoviesCard.css';

function MoviesCard({ movie, savedMovies, createMovie, deleteMovie }) {
  const currentUser = useContext(CurrentUserContext);
  const[isSaved, setIsSaved] = useState(false);

  const location = useLocation();
  const isSavedPage = location.pathname === '/saved-movies';

  const handleSaveBtn = () => {
    if(!isSaved) {
      createMovie(movie);
      setIsSaved(true);
    } else {
      const movieItem = savedMovies.filter((savedMovie)=> savedMovie.movieId === movie.id);
      deleteMovie(movieItem[0]._id);
      setIsSaved(false);
    }
  };

  const handleDeleteBtn = () => {
    deleteMovie(movie._id);
  }

  useEffect(() => {
    if(savedMovies.length > 0) {
      if(!isSaved) {
      setIsSaved(savedMovies.some(savedMovie=>
        savedMovie.movieId === movie.id && savedMovie.owner === currentUser._id));
      } else {
        setIsSaved(false);
      }
    }
  },[]);

    return (
      <li className="card">
        <a
        href={movie.trailerLink || movie.trailer}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="card__image"
          src={`${IMG_URL+movie.image.url}`}
          alt={`Превью фильма ${movie.nameRU}`}
        />
        </a>
        <div className="card__footer">
        <div className="card__name">{movie.nameRU}</div>
        {isSavedPage ? (
        <button
        className="card__button_delete"
        type="button"
        onClick={handleDeleteBtn}
      />
      ) : (
        <button
        className={`card__button ${isSaved ? 'card__button_saved' : 'card__button'}`}
        type="button"
        onClick={handleSaveBtn}
      >
      </button>
      )}
        </div>
        <div className="card__duration">{convertMinutesToHours(movie.duration)}</div>
      </li>
    );
  }

export default MoviesCard;
