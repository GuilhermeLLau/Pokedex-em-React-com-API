import React from 'react';
import './App.css';
import { getPkmns, GetPokeApi } from './api';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pokedex from './Components/Pokedex/Pokedex';
import SearchPokemon from './Components/SearchPokemon/SearchPokemon';
import Pagination from './Components/Pagination/Pagination';
import Header from './Components/Header/Header';
import PokemonDetails from './Components/PokemonDetails/PokemonDetails';

function App() {
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
    <div className="App">
      <Router>
        <SearchPokemon></SearchPokemon>
        <Pagination
          PrevClick={PrevClick}
          NextClick={NextClick}
          pages={pages}
        ></Pagination>
        {error ? (
          <div>Error 404</div>
        ) : (
          <div>
            {' '}
            {loading ? (
              <div className="appLoading">
                <h1>Loading...</h1>
              </div>
            ) : (
              <Pokedex pkmnList={pkmnList}></Pokedex>
            )}
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
