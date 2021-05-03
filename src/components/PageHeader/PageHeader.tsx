import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const PageHeader = () => (
  <header className="page-header">
    <ul className="page-header__list">
      <li className="page-header__item">
        <Link to="/" className="page-header__link">Home</Link>
      </li>
      <li className="page-header__item">
        <Link to="/about" className="page-header__link">About</Link>
      </li>
    </ul>
  </header>
);

export default PageHeader;
