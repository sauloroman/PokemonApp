import React from 'react';

interface PokemonMovementsProps {
  movements: string[];
}

export const PokemonMovements: React.FC<PokemonMovementsProps> = ({
  movements = [],
}) => {
  return (
    <>
      {movements.map((movement) => (
        <p className="pokemon__movement" key={movement}>
          {movement}
        </p>
      ))}
    </>
  );
};
