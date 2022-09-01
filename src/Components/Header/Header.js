import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.Header}>
      <Link to="/">
        <h1>Ir para Pagina Inicial</h1>
      </Link>
    </div>
  );
};

export default Header;
