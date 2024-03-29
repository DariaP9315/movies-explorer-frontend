import React from 'react';
import './NavTab.css';
import { Scrollchor } from 'react-scrollchor';

function NavTab() {
  return (
    <div className="nav-tab">
      <ul className="nav-tab__container">
        <Scrollchor to="#aboutProject" className="nav-tab__link">Узнать больше</Scrollchor>
      </ul>
    </div>
  );
}

export default NavTab;

