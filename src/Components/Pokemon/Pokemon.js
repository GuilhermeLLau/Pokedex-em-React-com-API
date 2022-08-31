import React from 'react';
import styles from './Pokemon.module.css';
import { Link } from 'react-router-dom';
import { SearchColorTypes, SearchTypes } from './utils';

const Pokemon = (props) => {
  const { pokemon } = props;
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <div
        className={`${styles.pkmnCard} ${SearchTypes(
          pokemon.types[0].type.name,
        )}`}
      >
        <figure className={styles.pkmnImg}>
          <img src={pokemon.sprites.front_default} alt="" />
        </figure>
        <div className={styles.pkmnInformation}>
          <span className={styles.pkmnOrder}>N°{pokemon.id}</span>
          <div className={styles.pkmnInfo}>
            <div className={styles.pkmnName}>{pokemon.name}</div>
          </div>
          <div className={styles.typesCard}>
            {pokemon.types.map((type, index) => {
              return (
                <span
                  className={`${styles.pkmnTypes} ${SearchColorTypes(
                    type.type.name,
                  )}`}
                  key={index}
                >
                  {type.type.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Pokemon;
