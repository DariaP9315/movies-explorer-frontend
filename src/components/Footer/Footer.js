import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__info">
        <div className="footer__copyright">&copy; 2021</div>
        <div className="footer__links">
          <a href="https://praktikum.yandex.ru/" className="footer__link" target="_blank"
            rel="noopener noreferrer">Яндекс.Практикум</a>
          <a href="https://github.com/" className="footer__link" target="_blank"
            rel="noopener noreferrer">Github</a>
          <a href="https://www.vk.com/" className="footer__link" target="_blank"
            rel="noopener noreferrer">ВКонтакте</a>
        </div>
      </div>
    </footer>
  );
}


export default Footer;
