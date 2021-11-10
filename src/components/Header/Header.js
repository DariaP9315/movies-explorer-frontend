import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Auth from '../Auth/Auth';
import NavMenu from '../NavMenu/NavMenu';
import logoPath from '../../images/logo.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: props.loggedIn,
    };
  }

  render() {
    return (
      <header className={`header${this.state.loggedIn ? '' : ' header_landing'}`}>
        <Link to="/">
          <img alt='Логотип' src={logoPath} />
        </Link>
        {this.state.loggedIn ? <NavMenu onOpenMenu={this.props.onOpenMenu} /> : <Auth />}
      </header>
    );
  }
}

export default Header;