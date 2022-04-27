import React from 'react';
import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import photoPath from '../../images/photo.jpeg';
import arrowPath from '../../images/arrow.svg';

function AboutMe() {
  return (
    <section className="section about-me" id="aboutMe">
      <SectionTitle title="Студент" />
      <div className="about-me__description">
        <div className="about-me__text">
          <h3 className="about-me__name">Дарья Попова</h3>
          <h4 className="about-me__about">Фронтенд-разработчик, 28 лет</h4>
          <p className="about-me__info">
            Я родилась и живу в Тольятти, закончила институт туризма и социальных технологий в ПВГУС в 2015 г. В 2021 г. закончила обучение в Я.Практикуме по специальности "Веб-разработчик". С 2016 года и по настоящее время работаю в Тольяттинском художественном музее. После того, как прошла курс по веб-разработке, намерена найти работу на позиции фронтендера.
          </p>
          <div className="about-me__social">
            <a href="https://vk.com/dasha_flash15" className="about-me__social-item" target="_blank"
              rel="noopener noreferrer">ВКонтакте</a>
            <a href="https://github.com/DariaP9315" className="about-me__social-item" target="_blank"
              rel="noopener noreferrer">Github</a>
          </div>
        </div>
        <img alt='Фото студента' src={photoPath} className="about-me__image" />
      </div>
      <h5 className="about-me__portfolio-title">Портфолио</h5>
      <a href="https://github.com/DariaP9315/how-to-learn" className="about-me__portfolio-item" target="_blank"
        rel="noopener noreferrer">
        <div className="about-me__portfolio-name">Статичный сайт</div>
        <img alt='Стрелка' src={arrowPath} />
      </a>
      <a href="https://github.com/DariaP9315/russian-travel" className="about-me__portfolio-item" target="_blank"
        rel="noopener noreferrer">
        <div className="about-me__portfolio-name">Адаптивный сайт</div>
        <img alt='Стрелка' src={arrowPath} />
      </a>
      <a href="https://github.com/DariaP9315/react-mesto-api-full" className="about-me__portfolio-item" target="_blank"
        rel="noopener noreferrer">
        <div className="about-me__portfolio-name">Одностраничное приложение</div>
        <img alt='Стрелка' src={arrowPath} />
      </a>
    </section>
  );
}

export default AboutMe;
