import React, { useContext, useEffect, useState } from 'react';
import { usePokemons } from '../hooks';
import { Pagination, Spinner } from '../../shared/components';
import { PokemonContext, type ContextState } from '../../context/PokemonContext';
import { PokemonCard } from './PokemonCard';
import type { Generation } from '../interfaces/pokemon-per-type.interface';

export const PokemonList: React.FC = () => {

  const [visiblePokemons, setVisiblePokemons] = useState<Generation[]>([])

  const { 
    ui: { search },
    pokemons: { items },
    setPokemons
  } = useContext<ContextState>( PokemonContext )
  
  const { isFetching, pokemons } = usePokemons({ search });

  useEffect(() => {
    setPokemons( pokemons )
  }, [pokemons])

  return (
    <>
    {
      isFetching
      ? ( <Spinner /> )
      : (
        <>
          <ul className="pokemon-grid animation animate__animated animate__fadeDown">
            {visiblePokemons?.map((pokemon) => (
              <PokemonCard 
                id={ pokemon.url.split('/')[6] }
                key={pokemon.name} 
              />
            ))}
          </ul>

          { items && <Pagination setVisiblePokemons={ setVisiblePokemons } />}      
        </>
      )
    }
      
    </>
  );
};
