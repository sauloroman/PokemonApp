import React from 'react';

interface PokemonAbilitiesProps {
  abilities: (string | undefined)[];
}

export const PokemonAbilities: React.FC<PokemonAbilitiesProps> = ({
  abilities = [],
}) => {
  return (
    <>
      {abilities.map((skill) => (
        <p className="skill" key={skill}>
          {skill}
        </p>
      ))}
    </>
  );
};
