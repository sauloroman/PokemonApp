import React from 'react';
import { usePokemon } from '../hooks/usePokemon';
import { useNavPage } from '../../shared/hooks';
import { getPokemonInfo } from '../../shared/helpers';
import { PokemonTypesCard } from './PokemonTypesCard';

interface PokemonCardProps {
  id: string,
  pokemonName: string,
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ id, pokemonName }) => {

  const { onNavigatePage } = useNavPage()
  const { data } = usePokemon( id )
  const pokemon = getPokemonInfo( data )

  return (
    <div
      onClick={() => onNavigatePage(`/pokemon/${id}`)}
      className={`pokemon__card background-${pokemon.type?.[0]} animation`}
    >
      <div className={`${pokemon.type?.[0]} pokemon__card-imageBox`}>
        <img
          className="pokemon__card-image"
          src={pokemon.image}
          alt={pokemon.name}
        />
      </div>

      <div className="pokemon__card-info">
        <h3 className={`text-${pokemon.type?.[0]}`}>{pokemon.name}</h3>

        <div className="pokemon__card-types">
          <div className="pokemon__card-type">
            <PokemonTypesCard types={pokemon.type} />
          </div>
          <p className="pokemon__card-info-type">Tipo</p>
        </div>

        <div className="pokemon__card-stats">
          <div className="pokemon__card-stat">
            <h4>Hp</h4>
            <p>{pokemon.hp}</p>
          </div>
          <div className="pokemon__card-stat">
            <h4>Ataque</h4>
            <p>{pokemon.attack}</p>
          </div>
          <div className="pokemon__card-stat">
            <h4>Defensa</h4>
            <p>{pokemon.defense}</p>
          </div>
          <div className="pokemon__card-stat">
            <h4>Velocidad</h4>
            <p>{pokemon.speed}</p>
          </div>
        </div>
      </div>

      <div
        className={`background-${pokemon.type?.[0]} pokemon__card-overlay animation`}
      >
        <img src={pokemon.image4} alt="Pokemon image" />
      </div>
    </div>
  );
};
