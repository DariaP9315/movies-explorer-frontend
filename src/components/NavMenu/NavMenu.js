import React from 'react';
import './NavMenu.css';
import Account from '../Account/Account';
import Navigation from '../Navigation/Navigation';

class NavMenu extends React.Component {

  render() {
    return (
      <div className="nav-menu">
        <Navigation />
        <Account />
        <button className="menu-button" onClick={this.props.onOpenMenu}></button>
      </div>
    );
  }
}

export default NavMenu;
