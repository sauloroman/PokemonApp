import React, { useEffect } from "react";
import { useForm } from "../../shared/hooks";

export const PokemonFormTypes: React.FC = () => {

  const { selectedType, onInputChange } = useForm({
    selectedType: localStorage.getItem('searchType') || ''
  }, null )

  useEffect( () => {
    localStorage.setItem('searchType', selectedType )
  }, [ selectedType ] )

  return (
    <form className="form pokemon-name__type">
      <select
        className="form__select"
        name="selectedType"
        value={selectedType}
        onChange={onInputChange}
      >
        <option value="">Todos los pokemons</option>
        {/* {pokemonTypes.map((pokemonType) => (
          <option key={pokemonType.name}>{pokemonType.name}</option>
        ))} */}
      </select>
    </form>
  );
};
