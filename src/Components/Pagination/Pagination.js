import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ NextClick, PrevClick, pages }) => {
  return (
    <div className={styles.pagContainer}>
      <h1>Pokédex</h1>
      <div className={styles.pagCard}>
        <button onClick={PrevClick}>Prev</button>
        <span>{pages} / 58</span>
        <button onClick={NextClick}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
