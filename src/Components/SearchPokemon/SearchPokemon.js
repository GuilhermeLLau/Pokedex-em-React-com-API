import React from 'react';
import styles from './SearchPokemon.module.css';
import Pokemon from '../Pokemon/Pokemon';

const SearchPokemon = () => {
  const [search, setSearch] = React.useState('pikachu');
  const [pkmn, setPkmn] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [notFound, setNotFound] = React.useState(false);
  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  React.useEffect(() => {
    handleClick();
  }, []);

  const handleClick = async () => {
    try {
      setNotFound(false);
      if (search === '') return null;
      setLoading(true);
      await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
        .then((response) => response.json())
        .then((response) => {
          setPkmn(response);
        });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setNotFound(true);
      console.log('error');
    }
  };
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchCard}>
        <div className={styles.searchMenu}>
          <h1>Procure o seu Pokemon Favorito !</h1>
          <div className={styles.searchBar}>
            <input
              className={styles.InputPkmn}
              type="text"
              onChange={handleChange}
              placeholder="Nome do Pokemon"
            />
            <button className={styles.BtnPkmn} onClick={handleClick}>
              Buscar
            </button>
          </div>
        </div>
        {notFound ? (
          <div className={styles.notFound}>
            <h1>Pokemon não encontrado...</h1>
            <img
              src="https://c.tenor.com/4uPJsA8k1KEAAAAM/pokemon-pikachu.gif"
              alt=""
            />
          </div>
        ) : (
          <div>
            {' '}
            {pkmn && (
              <div className={styles.pkmnSearchCard}>
                {loading ? (
                  <div className={styles.loading}>Loading...</div>
                ) : (
                  <div className={styles.Pokemon}>
                    {' '}
                    <Pokemon pokemon={pkmn} />
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPokemon;
