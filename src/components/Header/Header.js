import React from 'react';
import { Route, Link, useLocation } from 'react-router-dom';
import './Header.css';
import Auth from '../Auth/Auth';
import Menu from '../Menu/Menu';
import logoPath from '../../images/logo.svg';

function Header({ loggedIn }) {
  const location = useLocation();
  const Main = location.pathname === '/';

  return (
    <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
      <header className={`header ${Main ? 'header_landing' : ''}`}>
        <Link to='/'>
          <img alt='логотип' src={logoPath} />
        </Link>
        {loggedIn ? (
          <Menu main={Main} />) : (<Auth />)}
      </header>
    </Route>
  );
}

export default Header;