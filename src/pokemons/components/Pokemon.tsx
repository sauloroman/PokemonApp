import React from 'react';
import type { Pokemon as PokemonType } from '../interfaces/pokemon.interface';
import { getPokemonInfo } from '../../shared/helpers';
import { PokemonAbilities, PokemonImages, PokemonMovements, PokemonStats, PokemonTypesCard } from '../components';

interface PokemonProps {
  data: PokemonType
}

export const Pokemon: React.FC<PokemonProps> = ({ data }) => {

  const pokemon = getPokemonInfo(data)

  return (
    <div className='pokemon-item'>
      <div className="pokemon__container">
        <div className="pokemon__info animate__animated animate__fadeInLeft">

          <figure className={`${pokemon.type?.[0]}`}>
            <img
              className="pokemon__image animate__animated animate__zoomIn"
              src={pokemon.image}
              alt="Pokemon image"
            />
          </figure>

          <div className="pokemon__text">
            <div className="pokemon__general">
              <p className={`text-${pokemon.type?.[0]} pokemon__id`}>
                No. #{pokemon.id}
              </p>
              <h2 className={`text-${pokemon.type?.[0]} pokemon__title`}>
                {pokemon.name}
              </h2>
              <hr />

              <div className="pokemon__measures">
                <div className="pokemon__measure">
                  <h3>Peso</h3>
                  <p>{pokemon.height}</p>
                </div>
                <div className="pokemon__measure">
                  <h3>Altura</h3>
                  <p>{pokemon.height}</p>
                </div>
              </div>

              <div className="pokemon__content">
                <h3>Tipo</h3>
                <div className="pokemon__types">
                  <PokemonTypesCard types={ pokemon.type } />
                </div>

                <div className="pokemon__abilities">
                  <h3>Habilidades</h3>
                  <PokemonAbilities abilities={pokemon.abilities} />
                </div>
              </div>

            </div>
          </div>

        </div>
        
        <div>
          <div className="pokemon__gallery animate__animated animate__fadeInRight">
            <PokemonImages images={ pokemon.images } type={ pokemon.type } />
          </div>

          <div className="pokemon__stats">
              <h2>Stats</h2>
              <hr />
              <PokemonStats 
                attack={ pokemon.attack }
                defense={ pokemon.defense }
                hp={ pokemon.hp }
                speed={ pokemon.speed }
              />
            </div>
        </div>
      </div>

      <div className="pokemon__movements">
        <h2>Movements</h2>
        <hr />

        <div className="pokemon__movementsContainer">
          <PokemonMovements movements={ pokemon.movements } />
        </div>
      </div>
    </div>
  );
};
