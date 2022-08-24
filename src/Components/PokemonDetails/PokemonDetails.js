import React from 'react';
import { useParams } from 'react-router-dom';
const PokemonDetails = () => {
  const { name } = useParams();

  return <div>PokemonDetails</div>;
};

export default PokemonDetails;
