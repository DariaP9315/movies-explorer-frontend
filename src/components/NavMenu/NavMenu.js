import React from 'react';
import './NavMenu.css';
import Account from '../Account/Account';
import Navigation from '../Navigation/Navigation';

function NavMenu(props) {
    return (
      <div className="nav-menu">
        <Navigation />
        <Account />
        <button className="menu-button" onClick={props.onOpenMenu}></button>
      </div>
    );
  }

export default NavMenu;
