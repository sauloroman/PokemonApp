import React from "react";
import { capitalizeString } from "../../shared/helpers";

interface PokemonTypesCardProps {
  types: string[];
}

export const PokemonTypesCard: React.FC<PokemonTypesCardProps> = ({
  types = [],
}) => {
  return (
    <>
      {types.map((type) => (
        <p className={`${type} type-pokemon`} key={type}>
          { capitalizeString(type) }
        </p>
      ))}
    </>
  );
};
