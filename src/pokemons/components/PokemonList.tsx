import React, { useContext } from 'react';
import { usePokemons } from '../hooks';
import { Spinner } from '../../shared/components';
import { PokemonContext, type ContextState } from '../../context/PokemonContext';
import { PokemonCard } from './PokemonCard';

export const PokemonList: React.FC = () => {
  const { ui: { search, amountPokemonsPerPage } } = useContext<ContextState>( PokemonContext )
  
  const { isFetching, pokemons } = usePokemons( search );
  return (
    <>
    {
      isFetching
      ? ( <Spinner /> )
      : (
        <ul className="pokemon-grid animation animate__animated animate__fadeDown">
          {pokemons?.map((pokemon) => (
            <PokemonCard 
              key={pokemon.name} 
            />
          ))}
        </ul>
      )
    }
      
    </>
  );
};
