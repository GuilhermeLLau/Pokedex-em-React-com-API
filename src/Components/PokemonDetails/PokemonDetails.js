import React from 'react';
import { useParams } from 'react-router-dom';
import { SearchColorTypes, SearchTypes } from '../Pokemon/utils';
import styles from './PokemonDetails.module.css';
const PokemonDetails = () => {
  const { id } = useParams();
  const [url, setUrl] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [pkmn, setPkmn] = React.useState(null);
  React.useEffect(() => {
    PkmnDetails();
    SearchUrl();
  }, []);

  const PkmnDetails = async () => {
    try {
      setLoading(true);
      await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then((response) => {
          setPkmn(response);
        });
      setLoading(false);
    } catch (error) {
      console.log('error');
    }
  };
  const SearchUrl = () => {
    if (id.length === 1) {
      setUrl('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00');
    } else if (id.length === 2) {
      setUrl('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0');
    } else {
      setUrl('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/');
    }
  };
  console.log(pkmn);

  return (
    <div className={styles.PkmnDetailsContainer}>
      {loading && <div className={styles.Loading}>Loading...</div>}
      <div className={styles.PkmnDetailsGrid}>
        <div className={styles.PkmnDetailsFlex}>
          <div className={styles.PkmnDetailsInfo}>
            <h1>{pkmn && pkmn.name}</h1>
            <h2>N°{pkmn && pkmn.id}</h2>
          </div>
          {pkmn && (
            <div
              className={`${styles.PkmnDetailsImg} ${SearchTypes(
                pkmn.types[0].type.name,
              )}`}
            >
              <img src={`${url}${id}.png`} alt="não encontrado" />
            </div>
          )}

          {pkmn && (
            <div className={styles.PkmnDetailsCardTypes}>
              {pkmn.types.map((type, index) => {
                return (
                  <div
                    className={`${styles.PkmnDetailsType} ${SearchColorTypes(
                      type.type.name,
                    )}`}
                    key={index}
                  >
                    <span>{type.type.name}</span>
                  </div>
                );
              })}
            </div>
          )}
          <span className={styles.PkmnDetailsAbility}>
            Ability: {pkmn && pkmn.abilities[0].ability.name}
          </span>
        </div>
        {pkmn && (
          <div className={styles.PkmnStatsCard}>
            {pkmn.stats.map((stats, index) => {
              return (
                <div key={index} className={styles.PkmnStats}>
                  <span className={styles.PkmnStatsName}>
                    {stats.stat.name}: {stats.base_stat}
                  </span>
                  <progress value={stats.base_stat} max="120"></progress>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonDetails;
