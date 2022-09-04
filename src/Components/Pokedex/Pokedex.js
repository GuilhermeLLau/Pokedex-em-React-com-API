import React from 'react';
import Pokemon from '../Pokemon/Pokemon';
import styles from './Pokedex.module.css';

const Pokedex = (props) => {
  const { pkmnList, loading } = props;

  return (
    <div>
      <div className={styles.pkmnGrid}>
        {loading ? (
          <div className={styles.Loading}>Loading...</div>
        ) : (
          pkmnList &&
          pkmnList.map((pokemon, index) => {
            return <Pokemon key={index} pokemon={pokemon} />;
          })
        )}
      </div>
    </div>
  );
};

export default Pokedex;
