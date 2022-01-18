import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function NotFound({ history }) {
  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <Link className="not-found__link-back" onClick={()=>history.go(-2)}>Назад</Link>
    </section>
  );
}

export default NotFound;
