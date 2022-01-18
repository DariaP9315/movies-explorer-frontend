import React from 'react';
import './Promo.css';
import { Scrollchor } from 'react-scrollchor';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <button className="nav-button">
        <Scrollchor to="#aboutProject" className="nav-tab__link">Узнать больше</Scrollchor>
      </button>
    </section>
  );
}

export default Promo;
