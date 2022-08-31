import React from 'react';
import Pagination from '../Pagination/Pagination';
import Pokedex from '../Pokedex/Pokedex';
import SearchPokemon from '../SearchPokemon/SearchPokemon';
import { getPkmns, GetPokeApi } from '../../api';

const Home = () => {
  const [pkmnList, setPkmnList] = React.useState(null);
  const [url, setUrl] = React.useState('https://pokeapi.co/api/v2/pokemon/');
  const [pages, setPages] = React.useState(1);
  const [prev, setPrev] = React.useState('');
  const [next, setNext] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const FetchPkmns = async () => {
    try {
      setLoading(true);
      const data = await GetPokeApi(url);
      setPrev(data.previous);
      setNext(data.next);
      const promises = data.results.map(async (pokemon) => {
        return await getPkmns(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPkmnList(results);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log('error');
    }
  };

  React.useEffect(() => {
    FetchPkmns();
  }, [url]);

  const PrevClick = () => {
    if (pages === 1) return null;
    setPages(pages - 1);
    setUrl(prev);
  };

  const NextClick = () => {
    if (pages === 58) return null;
    setPages(pages + 1);
    setUrl(next);
  };
  return (
    <div>
      <SearchPokemon></SearchPokemon>
      <Pagination
        PrevClick={PrevClick}
        NextClick={NextClick}
        pages={pages}
      ></Pagination>
      <Pokedex pkmnList={pkmnList}></Pokedex>
    </div>
  );
};

export default Home;
