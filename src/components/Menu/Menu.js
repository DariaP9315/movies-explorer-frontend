import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Account from '../Account/Account';

import './Menu.css';

function Menu({ main }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <button className={`menu__btn ${isMenuOpen ? 'menu__close-btn' : 'menu__burger-btn'} `} onClick={handleMenuClick} />
      <nav className={`menu__auth ${isMenuOpen ? 'menu__side' : ''}`}>
        <div className="menu__container">
          <NavLink
            exact to="/"
            className="menu__film-link"
            activeClassName="menu__film-link_active"
            onClick={handleMenuClick}
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={`menu__film-link ${main ? 'menu__film-link_main' : ''}`}
            activeClassName="menu__film-link_active"
            onClick={handleMenuClick}
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={`menu__film-link ${main ? 'menu__film-link_main' : ''}`}
            activeClassName="menu__film-link_active"
            onClick={handleMenuClick}
          >
            Сохраненные фильмы
          </NavLink>
        </div>
        <Account show={handleMenuClick} onClick={handleMenuClick} />

      </nav>
    </>
  );
}

export default Menu;