import React from 'react';
import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

function AboutProject() {
  return (
    <section className="about-project" id='aboutProject'>
      <SectionTitle title="О проекте" />
      <div className="about-project__description">
        <div className="about-project__column">
          <h3 className="about-project__description-tile">
            Дипломный проект включал 5&nbsp;этапов
          </h3>
          <p className="about-project__description-info">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__column">
          <h3 className="about-project__description-tile">
            На выполнение диплома ушло 5&nbsp;недель
          </h3>
          <p className="about-project__description-info">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__ratio">
        <p className="about-project__ratio-time about-project__ratio-time_color_mint">1&nbsp;неделя</p>
        <p className="about-project__ratio-time about-project__ratio-time_color_gray">4&nbsp;недели</p>
        <p className="about-project__ratio-name">Back-end</p>
        <p className="about-project__ratio-name">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;