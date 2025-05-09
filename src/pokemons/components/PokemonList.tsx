import React, { useContext } from 'react';
import { usePokemons } from '../hooks';
import { Spinner } from '../../shared/components';
import { PokemonContext, type ContextState } from '../../context/PokemonContext';
import { PokemonCard } from './PokemonCard';

export const PokemonList: React.FC = () => {

  const { 
    ui: { search, amountPokemonsPerPage },
    pagination: { page, limit }
  } = useContext<ContextState>( PokemonContext )
  
  const { isFetching, pokemons } = usePokemons({
    search,
    limit,
    page
  });

  return (
    <>
    {
      isFetching
      ? ( <Spinner /> )
      : (
        <ul className="pokemon-grid animation animate__animated animate__fadeDown">
          {pokemons?.map((pokemon) => (
            <PokemonCard 
              id={ pokemon.url.split('/')[6] }
              pokemonName={ pokemon.name }
              key={pokemon.name} 
            />
          ))}
        </ul>
      )
    }
      
    </>
  );
};
