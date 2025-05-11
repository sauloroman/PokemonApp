import React from 'react';

interface PokemonStatsProps {
  hp: number | string,
  attack: number | string,
  defense: number | string,
  speed: number | string
}

export const PokemonStats: React.FC<PokemonStatsProps> = ({
  attack,
  defense,
  hp,
  speed,
}) => {
  return (
    <ul className="pokemons__stats-list">
      <li className="pokemons__stat">
        <header>
          <h3>Hp</h3>
          <p>{hp} / 200 </p>
        </header>
        <div
          className="bar-power"
          style={{ width: `${+hp / 2}%` }}
        ></div>
      </li>
      <li className="pokemons__stat">
        <header>
          <h3>Ataque</h3>
          <p>{attack} / 200 </p>
        </header>
        <div
          className="bar-power"
          style={{ width: `${+attack / 2}%` }}
        ></div>
      </li>
      <li className="pokemons__stat">
        <header>
          <h3>Defensa</h3>
          <p>{defense} / 200 </p>
        </header>
        <div
          className="bar-power"
          style={{ width: `${+defense / 2}%` }}
        ></div>
      </li>
      <li className="pokemons__stat">
        <header>
          <h3>Velocidad</h3>
          <p>{speed} / 200 </p>
        </header>
        <div
          className="bar-power"
          style={{ width: `${+speed / 2}%` }}
        ></div>
      </li>
    </ul>
  );
};
