import React from 'react';
import { Link } from 'react-router-dom';
import './Account.css';

function Account ({show, onClick}) {
    return (
      <Link to="/profile"
        className={`account ${show ? ' account_menu' : ''}`}
        onClick={onClick}
      >
        <div className="account__text">Аккаунт</div>
        <div className="account__icon"></div>
      </Link>
    );
  }

export default Account;
