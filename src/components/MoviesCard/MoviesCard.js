import React from 'react';
import './MoviesCard.css';

class MoviesCard extends React.Component {

  render() {
    return (
      <li className="card">
        <img
          alt="Постер фильма"
          className="card__image"
          src={this.props.card.url}
        />
        <div className="card__footer">
        <div className="card__name">{this.props.card.nameRU}</div>
          <button className={`card__button${!this.props.card.saved ? '' : this.props.isSavedMovies ? ' card__button_delete' : ' card__button_saved'}`}>
          </button>
        </div>
        <div className="card__duration">{this.props.card.duration}</div>
      </li>
    );
  }
}

export default MoviesCard;
