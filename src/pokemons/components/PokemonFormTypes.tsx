import React, { useContext, useEffect } from "react";
import { useForm } from "../../shared/hooks";
import { usePokemonsTypes } from "../hooks";
import { capitalizeString } from "../../shared/helpers";
import { PokemonContext } from "../../context";
import type { ContextState } from "../../context/PokemonContext";

export const PokemonFormTypes: React.FC = () => {

  const { setSearch, setPokemonPage } = useContext<ContextState>( PokemonContext )
  const { data: pokemonTypes } = usePokemonsTypes()

  const { selectedType, onInputChange } = useForm({
    selectedType: localStorage.getItem('search-type-pokedex') || ''
  }, null )

  useEffect( () => {
    setSearch( selectedType.toLowerCase() )
    setPokemonPage( 1 )
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
        {pokemonTypes?.map((pokemonType) => (
          <option
            key={pokemonType.name}
          >
            {capitalizeString( pokemonType.name )}
          </option>
        ))}
      </select>
    </form>
  );
};
